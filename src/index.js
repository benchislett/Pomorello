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
    const is_active = await t.card("POMORELLO_ACTIVE");
    if (!is_active) {
      return [];
      console.log("No Pomorello Active");
    }
    console.log("Displaying Pomorello");
    return [
      {
        dynamic: async () => {
          const start_ms = await t.card("POMORELLO_START");
          const age_ms = Date.now() - start_ms;
          const age_str = `${(Math.floor(age_ms / 60000) % 60).toFixed(0)}:${(Math.floor(age_ms / 1000) % 60).toFixed(0)}`;
          return {
            text: "Pomorello: " + age_str
          }
        }
      }
    ];
  }
});
