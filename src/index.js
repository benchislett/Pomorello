import { Start, Break, End } from "./update.js"
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js"
import { State } from "./data.js"

function Menu(t, opts) {
  console.log("Showing dropdown powerup menu");
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
    console.log("Loading card-badges");
    return [
      {
        dynamic: async () => {
          const state = new State();
          console.log("State initialized");
          await state.fetch(t);
          console.log("State retrieved");

          const age_ms = state.age();

          if (state.is_active) {
            if (age_ms > state.set_length) {
              await Break(t, state);
              return BreakBadge(state);
            } else {
              return StatusBadge(state);
            }
          } else if (state.is_break) {
            if (age_ms > state.break_length) {
              await End(t, state)
              return NoBadge(state);
            }
            return BreakBadge(state);
          } else {
            return NoBadge(state);
          }
        }
      }
    ];
  }
});

