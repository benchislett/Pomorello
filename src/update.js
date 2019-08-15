export async function Start(t, set_length, break_length) {
  return t.set("card", "shared", {
    POMORELLO_ACTIVE: true,
    POMORELLO_BREAK: false,
    POMORELLO_START: Date.now(),
    POMORELLO_SET_LENGTH: set_length,
    POMORELLO_BREAK_LENGTH: break_length
  });
}

export async function Break(t, state) {
  t.alert({
    message: `Pomodoro for card ${state.name} complete. Time to take a break!`,
    duration: 10,
    display: "success"
  });

  state.is_active = false;
  state.is_break = true;
  state.start = Date.now();

  return state.sync(t);
}

export async function End(t, state) {
  t.alert({
    message: `Break for card ${state.name} has ended!`,
    duration: 10,
    display: "success"
  });
 
  state.is_active = false;
  state.is_break = false;

  return state.sync(t);
}

