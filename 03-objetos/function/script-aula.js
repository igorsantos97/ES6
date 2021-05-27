// const perimetro = new Function('lado', 'return lado * 4');

// console.log(perimetro(2)); // 8

// function somar(n1, n2, n4) {
//   return n1 + n2;
// }

// console.log(somar.length); // 3
// console.log(somar.name); // somar
// console.log(somar.name.toLocaleUpperCase()); // SOMAR

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// };

// function descricaoCarro(velocidade) {
//   console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }

// descricaoCarro(); // undefined undefined
// descricaoCarro.call(); // undefined undefined
// descricaoCarro.call(carro); // Ford 2018
// descricaoCarro.call({ marca: 'Ford', ano: 2019 }, 100); // Ford 2019 100

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// frutas.forEach.call(carros, (carro) => {
//   console.log(carro); // Log de carros (call, mudou a referência)
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// Dom.prototype.ativo.call('top');

// // const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li'),
// };

// ul.ativo.call(li, 'ativar');
// ul.ativo('ativar');
// console.log(ul.element);

// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas);
// frutas.pop();

// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains('ativo');
// });

// // ou
// const arrayLi

// const filtro2 = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains('ativo');
// });

// console.log(filtro);

// console.log(li);

// const numeros = [3, 4, 6, 1, 34, 44, 32];

// Math.max(2,3,45,5,6,6) // 45
// Math.max([2,3,45,5,6,6]) // NaN
// Math.max(...[2,3,45,5,6,6]) // 45
// Math.max.apply(null, [2,3,45,5,6,6]) // 45

// const li = document.querySelector('li');

// const filtro2 = Array.prototype.filter.bind(li, (item) => {
//   return item.classList.contains('ativo');
// });

// console.log(filtro2());

// const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: 'Honda',
};

console.log(carro.acelerar(100, 20));

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(30)); // Honda acelerou 100 em 30
