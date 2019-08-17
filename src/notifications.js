let status = null;
async function init() {
  if (!("Notification" in window)) {
    status = false;
  } else if (Notification.permission === "granted") {
    status = false;
  } else {
    const res = await Notification.requestPermission();
    status = res === "granted";
  }
}

export async function notify(message) {
  if (status === null) {
    await init();
  }

  if (status) {
    return new Notification(message);
  }
}

