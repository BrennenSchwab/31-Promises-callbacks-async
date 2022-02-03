$(function() {
  let url = "https://pokeapi.co/api/v2";

  $.getJSON(`${url}/pokemon/?limit=1118`).then(data => {
    console.log(data);
  })
 
  $.getJSON(`${url}/pokemon/?limit=1118`)
    .then(data => {
      let randomPokemon = [];
      for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * data.results.length);
        let url = data.results.splice(randomIdx, 1)[0].url;
        randomPokemon.push(url);
      }
      return Promise.all(randomPokemon.map(url => $.getJSON(url)));
    })
    .then(results => {
      results.forEach(p => console.log(p));
    });

  let names = null;

  $.getJSON(`${url}/pokemon/?limit=1118`)
    .then(data => {
      let randomPokemon = [];
      for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * data.results.length);
        let url = data.results.splice(randomIdx, 1)[0].url;
        randomPokemon.push(url);
      }
      return Promise.all(randomPokemon.map(url => $.getJSON(url)));
    })
    .then(data => {
      names = data.map(d => d.name);
      return Promise.all(data.map(d => $.getJSON(d.species.url)))
    })
    .then(data => {
      let descriptions = data.map(d => {
        let descriptionObj = d.flavor_text_entries.find(
          entry => entry.language.name === "en"
        );
        return descriptionObj ? descriptionObj.flavor_text : "No description available."; 
      });
      descriptions.forEach((desc, i) => {
        console.log(`${names[i]}: ${desc}`);
      });
    });
    
