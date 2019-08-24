import { Start, End } from "./update.js";
import { Logger } from "./logger.js";

export function SetMenu(t, state) {
  Logger.trace("Showing dropdown powerup menu");
  
  const short_set = {
    text: "Short Set " + "15m active, 3m break, 9m long break".replace(/ /g, '\xa0'),
    callback: new_t => Start(new_t, state, 15, 3)
  };

  const med_set = {
    text: "Standard Set " + "25m active, 5m break, 15m long break".replace(/ /g, '\xa0'),
    callback: new_t => Start(new_t, state, 25, 5)
  };

  const long_set = {
    text: "Long Set " + "45m active, 10m break, 30m long break".replace(/ /g, '\xa0'),
    callback: new_t => Start(new_t, state, 45, 5)
  };

  let debug_set = {};
  if (Logger.level >= 2) {
    debug_set = {
      text: "Debug Set " + "1m active, 10s break, 30s long break".replace(/ /g, '\xa0'),
      callback: new_t => Start(new_t, state, 1, 1/6)
    };
  }

  const cancel = {
    text: "Cancel Active Set",
    callback: new_t => BadgeMenu(new_t, state)
  };

  return t.popup({
    title: "Start a Pomodoro",

    items: [
      cancel,
      short_set,
      med_set,
      long_set,
      debug_set
    ]
  });
}

export function BadgeMenu(t, state) {
  Logger.trace("Showing dropdown status menu");

  const kill_set = {
    text: "Cancel Set",
    callback: new_t => End(new_t, state)
  };

  return t.popup({
    title: "Active Set Menu",
    
    items: [
      kill_set
    ]
  });
}

