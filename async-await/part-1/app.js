let number = 4;
let url = "http://numbersapi.com";

async function part1() {
  let data = await $.getJSON(`${url}/${number}?json`);
  console.log(data);
}
part1();

const numbers = [8, 12, 24];
async function part2() {
  let data = await $.getJSON(`${url}/${numbers}?json`);
  console.log(data);
}
part2();

async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${url}/${number}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();
