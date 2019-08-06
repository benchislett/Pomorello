function Start(t, opts) {
  console.log("Starting pomodoro!");
  t.set("card", "private", {POMORELLO_ACTIVE: true, POMORELLO_START: Date.now()});
}

function Menu(t, opts) {
  t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Plain 25/5",
        callback: Start,
      }
    ]
  });
}

window.TrelloPowerUp.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        text: "Click me!",
        callback: Menu
      }
    ];
  },
  "card-badges": async (t, opts) => {
    return [
      {
        dynamic: async () => {
          let is_active = await t.get("card", "private", "POMORELLO_ACTIVE", false);
          const start_ms = await t.get("card", "private", "POMORELLO_START");
          const age_ms = Date.now() - start_ms;
          if (age_ms > 1000*60*25) {
            is_active = false;
            t.set("card", "private", "POMORELLO_ACTIVE", false);
          }
          if (!is_active) {
            return {
              text: "No Pomodoro active",
              color: 'green',
              refresh: 30
            };
          }
          const age_str = `${(Math.floor(age_ms / 60000) % 60).toFixed(0)}:${(Math.floor(age_ms / 1000) % 60).toFixed(0)}`;
          return {
            text: "Pomodoro: " + age_str,
            color: 'red',
            refresh: 30
          }
        }
      }
    ];
  }
});
