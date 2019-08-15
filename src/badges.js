function makeDynamic(state, item) {
  if (state.refresh) {
    return {refresh: state.refresh, ...item};
  } else {
    return item;
  }
}

export function NoBadge(state) {
  console.log("Displaying empty badge");
  const no_badge = {
    text: "No Pomodoro Active",
    color: "yellow"
  };

  return makeDynamic(state, no_badge);
}

export function StatusBadge(state) {
  console.log("Displaying status badge");
  const status_badge = {
    text: `Pomodoro Active: ${state.timeStr()}`,
    color: "green"
  };

  return makeDynamic(state, status_badge);
}

export function BreakBadge(state) {
  console.log("Displaying break badge");
  const break_badge = {
    text: `Resting: ${state.timeStr()}`,
    color: "blue"
  };

  return makeDynamic(state, break_badge);
}

