// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

// console.log(carros);

// const li = document.querySelectorAll('li');
// console.log(li);

// const retornoForEach = li.forEach((item, index) => {
//   item.classList.add('ativa-' + index);
// }); // undefined

// console.log(retornoForEach);

// // li.forEach(function (item) {
// //   item.classList.add('ativa');
// // });

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 3, 5, 6, 78];

// // console.log(novaArray);
// // console.log(carros);

// const numerosX2 = numeros.map((numero) => numero * 2);

// // console.log(numerosX2);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// // callback como arrayFunction
// const nomeAulas = (aula) => aula.nome;

// // callback como function "normal"
// const nomeAulas2 = function (aula) {
//   return aula.nome;
// };

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);

// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return item + acumulador;
// }, 0 );

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// }, 0);

// // const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   console.log(acumulador);
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => {
//   return item === 'Uva';
// });

// console.log(temUva);

// const frutas2 = ['Banana', '', 'Pêra', 'Uva'];

// const every = frutas2.every((fruta) => {
//   return fruta;
// });

// console.log(every); // false, por causa da string vazia

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((numero) => numero >= 6);

// console.log(maiorQue3);

// const frutas3 = ['', 'Banana', '', 'Pêra', 'Uva'];

// const findBanana = frutas3.find((item) => {
//   return item;
// });

// console.log('Index: ', findBanana); // Banana

// const indexUva = frutas3.findIndex((item) => {
//   return item;
// });

// console.log('Index: ', indexUva); // 1

// const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

// const arrayTruthy = frutas4.filter((fruta) => {
//   console.log(!!fruta, fruta);
//   return fruta;
// });

// console.log(arrayTruthy); // ["Banana", "Uva", "Maçã"]

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
});

console.log(aulasMaiores);
