// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (img, index, array) {
//   // console.log(img, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (titulo, index, array) {
  // console.log(titulo, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item, index) => {
//   console.log(item);
// });

let i = 0;
imgs.forEach((item, index) => console.log(item));
