const dynamic_attrs = {
  refresh: 30
}

function getTimeStr(age_ms) {
  const time_ms = 1000 * 60 * 25 - age_ms;
  
  const mins = Math.floor(time_ms / 60000) % 60;
  const mins_str = mins.toFixed(0).padStart(2, "0");

  const secs = Math.floor(time_ms / 1000) % 60;
  const secs_str = secs.toFixed(0).padStart(2, "0");

  return `${mins_str}:${secs_str}`
}

export function NoBadge(dynamic = true) {
  const no_badge = {
    text: "No Pomodoro Active",
    color: "yellow"
  };

  if (dynamic) {
    return {...dynamic_attrs, ...no_badge};
  } else {
    return no_badge;
  }
}

export function StatusBadge(age_ms, dynamic = true) {
  const status_badge = {
    text: `Pomodoro Active: ${getTimeStr(age_ms)}`,
    color: "green"
  };

  if (dynamic) {
    return {...dynamic_attrs, ...status_badge};
  } else {
    return status_badge;
  }
}

export function BreakBadge(age_ms, dynamic = true) {
  const break_badge = {
    text: `Resting: ${getTimeStr(age_ms)}`,
    color: "blue"
  };

  if (dynamic) {
    return {...dynamic_attrs, ...break_badge};
  } else {
    return break_badge;
  }
}

