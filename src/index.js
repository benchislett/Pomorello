import { Start, Break, End } from "./update.js"
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js"

function Menu(t, opts) {
  t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Plain 25/5",
        callback: (t, opts) => Start(t, 1000 * 60 * 25.0, 1000 * 60 * 5.0)
      },
      {
        text: "Debug 1/0.5",
        callback: (t, opts) => Start(t, 1000 * 60 * 1.0, 1000 * 60 * 0.5)
      }
    ]
  });
}

window.TrelloPowerUp.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        text: "Pomorello",
        callback: Menu 
      }
    ];
  },
  "card-badges": async (t, opts) => {
    console.log(Notification.permission);
    return [
      {
        dynamic: async () => {
          const is_active = await t.get("card", "private", "POMORELLO_ACTIVE", false);
          const is_break = await t.get("card", "private", "POMORELLO_BREAK", false);
          const start_ms = await t.get("card", "private", "POMORELLO_START", 0);
          const set_length = await t.get("card", "private", "POMORELLO_SET_LENGTH", 1000 * 60 * 25);
          const break_length = await t.get("card", "private", "POMORELLO_BREAK_LENGTH", 1000 * 60 * 5);

          const age_ms = Date.now() - start_ms;

	  if (is_active) {
            if (age_ms > set_length) {
              await Break(t);
              return BreakBadge(break_length, age_ms, true);
            } else {
              return StatusBadge(set_length, age_ms, true);
            }
          } else if (is_break) {
            if (age_ms > break_length) {
              await End(t)
              return NoBadge(true);
            }
            return BreakBadge(break_length, age_ms, true);
          } else {
            return NoBadge(true);
          }
        }
      }
    ];
  }
});

