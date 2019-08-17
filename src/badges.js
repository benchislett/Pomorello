import { Logger } from "./logger.js"

function makeDynamic(state, item) {
  if (state.refresh) {
    return {refresh: state.refresh, ...item};
  } else {
    return item;
  }
}

export function NoBadge(state) {
  Logger.debug(`Displaying empty badge for card ${state.name}`);
  const no_badge = {};

  return makeDynamic(state, no_badge);
}

export function StatusBadge(state) {
  Logger.debug(`Displaying status badge for card ${state.name}`);
  const status_badge = {
    text: `Pomodoro: ${state.timeStr()}`,
    color: "green"
  };

  return makeDynamic(state, status_badge);
}

export function BreakBadge(state) {
  Logger.debug(`Displaying break badge for card ${state.name}`);
  const break_badge = {
    text: `Break: ${state.timeStr()}`,
    color: "blue"
  };

  return makeDynamic(state, break_badge);
}

export function LongBreakBadge(state) {
  Logger.debug(`Displaying long break badge for card ${state.name}`);
  const lbreak_badge = {
    text: `Long Break: ${state.timeStr()}`,
    color: "blue"
  };

  return makeDynamic(state, break_badge);
}

