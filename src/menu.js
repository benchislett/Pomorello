import { Start } from "./update.js";

export function Menu(t) {
  Logger.trace("Showing dropdown powerup menu");
  t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Short Set: 15m active, 3m break, 9m long break",
        callback: t => Start(t, 15, 3)
      },
      {
        text: "Standard Set: 25m active, 5m break, 15m long break",
        callback: t => Start(t, 25, 5)
      },
      {
        text: "Long Set: 45m active, 10m break, 30m long break",
        callback: t => Start(t, 45, 10)
      },
      {
        text: "Debug Set: 1m active, 10s break, 30s long break",
        callback: t => Start(t, 1, 1 / 6)
      }
    ]
  });
}

