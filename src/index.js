import { Break, End } from "./update.js";
import { Menu } from "./menu.js";
import { NoBadge, StatusBadge, BreakBadge } from "./badges.js";
import { State } from "./data.js";
import { pomorello_icon, status_icon } from "./icons.js";
import { Logger } from "./logger.js";

window.TrelloPowerUp.initialize({
  "card-buttons": async () => {
    return [
      {
        icon: pomorello_icon,
        text: "Pomorello",
        callback: Menu 
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
            if (age_ms > state.break_length) {
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
      }
    ];
  }
});

