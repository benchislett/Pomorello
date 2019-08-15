export async function Start(t, set_length, break_length) {
  console.log("Starting pomodoro!");
  return t.set("card", "private", {
    POMORELLO_ACTIVE: true,
    POMORELLO_BREAK: false,
    POMORELLO_START: Date.now(),
    POMORELLO_SET_LENGTH: set_length,
    POMORELLO_BREAK_LENGTH: break_length
  });
}

export async function Break(t) {
  const name_p = t.card("name");
  const start_ms_p = t.get("card", "private", "POMORELLO_START");
  const prev_s_p = t.get("card", "private", "POMORELLO_SECONDS", 0);
  const prev_sets_p = t.get("card", "private", "POMORELLO_SETS", 0);
  const [name, start_ms, prev_s, prev_sets] = await Promise.all([name_p, start_ms_p, prev_s_p, prev_sets_p]);
  
  const now = Date.now();
  const new_s = Math.ceil((now - start_ms) / 1000.0) + prev_s;
  
  t.alert({
    message: `Pomodoro for card ${name} complete. Time to take a break!`,
    duration: 10,
    display: "info"
  });

  return t.set("card", "private", {
    POMORELLO_ACTIVE: false,
    POMORELLO_BREAK: true,
    POMORELLO_SECONDS: new_s, 
    POMORELLO_SETS: prev_sets + 1,
    POMORELLO_START: now
  });
}

export async function End(t) {
  const name = await t.card("name");

  t.alert({
    message: `Break for card ${name} has ended!`
    duration: 10,
    display: "success"
  });
  
  return t.set("card", "private", {
    POMORELLO_ACTIVE: false,
    POMORELLO_BREAK: false,
    POMORELLO_START: 0
  });
}

