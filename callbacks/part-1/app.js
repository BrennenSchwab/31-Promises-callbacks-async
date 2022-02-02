let number = 4;
let numbers = [8, 12, 24];
let url = "http://numbersapi.com";
let facts = [];

$.getJSON(`${url}/${number}?json`, function(data) {
  console.log(data);
});


$.getJSON(`${url}/${numbers}?json`, function(data) {
  console.log(data);
});

$.getJSON(`${url}/${number}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${url}/${number}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${url}/${number}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${url}/${number}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
