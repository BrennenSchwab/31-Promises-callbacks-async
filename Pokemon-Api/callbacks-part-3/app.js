$(function() {
  let url = "https://pokeapi.co/api/v2";

  $.getJSON(`${url}/pokemon/?limit=1118`, function(data) {
    console.log(data);
  });

  $.getJSON(`${url}/pokemon/?limit=1118`, function(data) {
    let randomPokemonUrls = [];
    for (let i = 0; i < 3; i++) {
      let randomIdx = Math.floor(Math.random() * data.results.length);
      let url = data.results.splice(randomIdx, 1)[0].url;
      randomPokemonUrls.push(url);
    }
    randomPokemonUrls.forEach(function(url) {
      $.getJSON(url, function(data) {
        console.log(data);
      });
    });
  });


  
  $.getJSON(`${url}/pokemon/?limit=1118`, function(data) {
    let randomPokemonUrls = [];
    for (let i = 0; i < 3; i++) {
      let randomIdx = Math.floor(Math.random() * data.results.length);
      let url = data.results.splice(randomIdx, 1)[0].url;
      randomPokemonUrls.push(url);
    }
    randomPokemonUrls.forEach(function(url) {
      $.getJSON(url, function(data) {
        let name = data.name;
        $.getJSON(data.species.url, function(data) {
          let descriptionObj = data.flavor_text_entries.find(
            entry => entry.language.name === "en"
          );
          let description = descriptionObj
            ? descriptionObj.flavor_text
            : "No description available.";
          console.log(`${name}: ${description}`);
        });
      });
    });
  });

  