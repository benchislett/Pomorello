import { Logger } from "./logger.js";
import { notify } from "./notifications.js";

export async function Start(t, state, set_length_m, break_length_m) {
  Logger.trace("Starting new set");

  state.is_active = true;
  state.is_break = false;
  state.start_ms = Date.now();
  state.set_length = 1000 * 60 * set_length_m;
  state.break_length = 1000 * 60 * break_length_m;

  const toReturn = state.sync(t);
  t.closePopup();
  return toReturn;
}

export async function Break(t, state) {
  Logger.trace(`Pomodoro for card ${state.name} finished.`);

  notify(t, `Pomodoro for card ${state.name} complete.\nTime to take a break!`);

  state.is_active = false;
  state.is_break = true;
  state.start_ms = Date.now();
  state.addSet();

  const toReturn = state.sync(t);
  t.closePopup();
  return toReturn;
}

export async function End(t, state) {
  Logger.trace(`Break for card ${state.name} finished.`);

  notify(t, `Break for card ${state.name} has ended!`);

  state.is_active = false;
  state.is_break = false;
  state.start_ms = 0;

  const toReturn = state.sync(t);
  t.closePopup();
  return toReturn;
}

