import { Logger } from "./logger.js"

export function notify(t, message) {
  Logger.trace("Creating notification...");
  return t.alert({
    message,
    duration: 10,
    display: "success"
  });
}

