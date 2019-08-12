export async function Start(t) {
  console.log("Starting pomodoro!");
  return t.set("card", "private", {
    POMORELLO_ACTIVE: true,
    POMORELLO_BREAK: false,
    POMORELLO_START: Date.now()
  });
}

export async function Break(t) {
  console.log("Taking a break...");
  
  const start_ms_p = t.get("card", "private", "POMORELLO_START");
  const prev_s_p = t.get("card", "private", "POMORELLO_SECONDS", 0);
  const prev_sets_p = t.get("card", "private", "POMORELLO_SETS", 0);
  const [start_ms, prev_s, prev_sets] = await Promise.all([start_ms_p, prev_s_p, prev_sets_p]);
  
  const now = Date.now();
  const new_s = Math.ceil((now - start_ms) / 1000.0) + prev_s;
  
  return t.set("card", "private", {
    POMORELLO_ACTIVE: false,
    POMORELLO_BREAK: true,
    POMORELLO_SECONDS: new_s, 
    POMORELLO_SETS: prev_sets + 1,
    POMORELLO_START: now
  });
}

export async function End(t) {
  console.log("Pomodoro finished!");
  
  return t.set("card", "private", {
    POMORELLO_ACTIVE: false,
    POMORELLO_BREAK: false,
    POMORELLO_START: 0
  });
}

