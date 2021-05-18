const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop); // valor inicial - 264

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft;
// console.log(h2left);

const h2react = primeiroH2.getBoundingClientRect();
console.log(h2react.top); // valor inicial - 264

if (h2react.top < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}
