function Start(t, opts) {
  console.log("Starting pomodoro!");
  console.log(t, opts);
}

function Menu(t, opts) {
  /*t.popup({
    title: "Start a Pomodoro",

    items: [
      {
        text: "Plain 25/5",
        callback: Start,
      }
    ]
  });*/
}

window.TrelloPowerUp.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        text: "Click me!",
        callback: Menu
      }
    ];
  }
});
