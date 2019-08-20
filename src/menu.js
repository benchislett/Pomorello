import { Start } from "./update.js";
import { Logger } from "./logger.js";

export function Menu(t) {
  Logger.trace("Showing dropdown powerup menu");
  
  const short_set = {
    text: "Short Set " + "15m active, 3m break, 9m long break".replace(/ /g, '\xa0'),
    callback: t => Start(t, 15, 3)
  };

  const med_set = {
    text: "Standard Set " + "25m active, 5m break, 15m long break".replace(/ /g, '\xa0'),
    callback: t => Start(t, 25, 5)
  };

  const long_set = {
    text: "Long Set " + "45m active, 10m break, 30m long break".replace(/ /g, '\xa0'),
    callback: t => Start(t, 45, 5)
  };

  let debug_set = {};
  if (Logger.level >= 2) {
    debug_set = {
      text: "Debug Set " + "1m active, 10s break, 30s long break".replace(/ /g, '\xa0'),
      callback: t => Start(t, 1, 1/6)
    };
  }

  t.popup({
    title: "Start a Pomodoro",

    items: [
      short_set,
      med_set,
      long_set,
      debug_set
    ]
  });
}

