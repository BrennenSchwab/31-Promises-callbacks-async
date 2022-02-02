let number = 4;
let numbers = [8, 12, 24];
let url = "http://numbersapi.com";


$.getJSON(`${url}/${number}?json`).then(data => {
  console.log(data);
});


$.getJSON(`${url}/${numbers}?json`).then(data => {
  console.log(data);
});


Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${url}/${numbers}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
