
window.TrelloPowerUp.initialize({
  "card-buttons": async (t, opts) => {
    return [
      {
        text: 'Click me!',
        callback: x => console.log("Clicked with: ", JSON.stringify(x))
      }
    ];
  }
});
