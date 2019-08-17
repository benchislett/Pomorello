import { Logger } from "./logger.js"

let status = null;
async function init() {
  Logger.trace("Initializing notifications...");
  if (!("Notification" in window)) {
    status = false;
  } else if (Notification.permission === "granted") {
    status = false;
  } else {
    const res = await Notification.requestPermission();
    status = res === "granted";
  }
  Logger.info(`Notification status: ${status}`);
  return status;
}

export async function notify(message) {
  Logger.trace("Creating notification...");
  if (status === null) {
    Logger.debug("Notification status is null. Still waiting for permission.");
    await init();
  }

  if (status) {
    Logger.trace("Notifications status positive. Sending notification.");
    return new Notification(message);
  }
}

// Initialize notification status on module load
init();

