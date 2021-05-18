// Retorne no console todas as imagens do site
const imgs = document.getElementsByTagName('img');
const imgs2 = document.querySelectorAll('img');

// console.log(imgs);
// console.log(imgs2);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsWithImagesName = document.querySelectorAll('[src*="imagem"]');
const imgsWithImagesName2 = document.querySelectorAll('[src^="./img/imagem"]');

// console.log(imgsWithImagesName);
// console.log(imgsWithImagesName2);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');

// console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');

// Selecione o último p do site
// const allP = document.querySelectorAll('p');
const allP = document.querySelectorAll('p');
const lastP = allP[allP.length - 1];

console.log(allP);
