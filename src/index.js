window.TrelloPowerUp.initialize({
  "card-badges": async function(t, opts) {
    const id = await t.card("id");
    console.log("Got id: ", id);
    return [{text: id}];
  }
});
