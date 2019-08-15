import { Start, Break, End } from "./update.js"
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js"
import { State } from "./data.js"

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
    return [
      {
        dynamic: async () => {
          const state = new State();
          await state.fetch(t);

          const age_ms = state.age();

          if (is_active) {
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

