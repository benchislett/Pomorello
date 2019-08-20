import { Break, End } from "./update.js";
import { SetMenu } from "./menu.js";
import { NoBadge, StatusBadge, BreakBadge, StatsBadge } from "./badges.js";
import { State } from "./data.js";
import { pomorello_icon, status_icon } from "./icons.js";
import { Logger } from "./logger.js";

window.TrelloPowerUp.initialize({
  "card-buttons": async t => {
    const state = new State();
    await state.fetch(t);

    return [
      {
        icon: pomorello_icon,
        text: "Pomorello",
        callback: new_t => SetMenu(new_t, state)
      }
    ];
  },
  "card-badges": t => {
    Logger.trace("Loading card-badges");
    return [
      {
        dynamic: async () => {
          const state = new State();
          Logger.debug("State initialized");

          await state.fetch(t);
          Logger.info(`State retrieved for card ${state.name}`);

          const age_ms = state.age();

          if (state.is_active) {
            Logger.trace("Pomodoro active");
            if (age_ms > state.set_length) {
              Logger.trace("Pomodoro expired");
              await Break(t, state);
              return BreakBadge(state);
            } else {
              Logger.trace("Pomodoro in progress");
              return StatusBadge(state);
            }
          } else if (state.is_break) {
            Logger.trace("Break active");
            if (age_ms > state.break_length * (state.break_parity % 3 === 0 ? 3 : 1)) {
              Logger.trace("Break expired");
              await End(t, state)
              return NoBadge(state);
            } else {
              Logger.trace("Break in progress");
              return BreakBadge(state);
            }
          } else {
            Logger.trace("No Pomodoro active");
            return NoBadge(state);
          }
        }
      }
    ];
  },
  "card-detail-badges": t => {
    Logger.trace("Loading card-detail-badges");
    return [
      {
        dynamic: async () => {
          const state = new State();
          await state.fetch(t);

          if (state.is_active) {
            return StatusBadge(state);
          } else if (state.is_break) {
            return BreakBadge(state);
          } else {
            return NoBadge(state);
          }
        }
      },
      {
        dynamic: async () => {
          const state = new State();
          await state.fetch(t);

          return StatsBadge(state);
        }
      }
    ];
  }
});

