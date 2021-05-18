// Mostre no console cada parágrafo do site
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
  // console.log(paragraph);
});

// Mostre o texto dos parágrafos no console
paragraphs.forEach((paragraph) => {
  // console.log(paragraph.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  // console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
