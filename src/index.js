console.log("Application loaded!");

window.TrelloPowerUp.initialize({
  "card-badges": async function(t, opts) {
    const card = await t.card("all");
    return [{text: card.id}];
  }
});
