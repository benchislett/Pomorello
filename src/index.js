console.log("Application loaded!");

window.TrelloPowerUp.initialize({
  "card-badges": async function(t, opts) {
    const all = await t.card("all");
    console.log(all);
  }
});
