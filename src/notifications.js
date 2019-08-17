import { Logger } from "./logger.js"

export function notify(message) {
  Logger.trace("Creating notification...");
  return t.alert({
    message,
    duration: 10,
    display: "success"
  });
}

