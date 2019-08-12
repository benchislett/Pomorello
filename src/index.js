import { Start, Break, End } from "./update.js"
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js"
import { set_length, break_length } from "./defs.js"

function Menu(t, opts) {
  t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Plain 25/5",
        callback: Start
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
    return [
      {
        dynamic: async () => {
          const is_active = await t.get("card", "private", "POMORELLO_ACTIVE", false);
          const is_break = await t.get("card", "private", "POMORELLO_BREAK", false);
          const start_ms = await t.get("card", "private", "POMORELLO_START", 0);
          const age_ms = Date.now() - start_ms;

          console.log(is_active, is_break, start_ms, age_ms);

	  if (is_active) {
            if (age_ms > set_length) {
              await Break(t);
              return BreakBadge(age_ms, true);
            } else {
              return StatusBadge(age_ms, true);
            }
          } else if (is_break) {
            if (age_ms > break_length) {
              await End(t)
              return NoBadge(true);
            }
            return BreakBadge(age_ms, true);
          } else {
            return NoBadge(true);
          }
        }
      }
    ];
  }
});
