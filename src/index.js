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
          const is_active = await t.card("POMORELLO_ACTIVE");
          if (!is_active) {
            return {
              text: "No Pomodoro active",
              refresh: 30
            };
          }
          const start_ms = await t.card("POMORELLO_START");
          const age_ms = Date.now() - start_ms;
          const age_str = `${(Math.floor(age_ms / 60000) % 60).toFixed(0)}:${(Math.floor(age_ms / 1000) % 60).toFixed(0)}`;
          return {
            text: "Pomodoro: " + age_str,
            refresh: 30
          }
        }
      },
      {
        dynamic: function(){
          return {
            text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
            color: 'green',
            refresh: 10 // in seconds
          };
        }
      }
    ];
  }
});
