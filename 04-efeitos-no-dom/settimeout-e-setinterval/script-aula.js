// const btn = document.querySelector('button');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//   setTimeout(() => {
//     console.log(this);
//   }, 1000);
// }

// // function espera(texto) {
// //   console.log('Passu 0');
// // }

// setTimeout(() => {
//   console.log('Testando');
// }, 0);

// // for (let i = 0; i < 20; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 300 * i);
// // }

// loop a cada segundo
function loop(texto, numeroFixo) {
  console.log(texto + ' ' + numeroFixo);
}

// setInterval(loop, 300, '300ms', 20);

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 300);

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 5) {
    clearInterval(meuLoop);
  }
}, 300);
