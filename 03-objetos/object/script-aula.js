// const pessoa = new Object({
//   nome: 'Igor',
// });

// // console.log(pessoa.nome);

// const carro = {
//   roda: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   },
// };

// const honda = Object.create(carro);

// // honda.marca = 'Honda';
// // console.log(honda); // Honda alecerou

// // honda.init('HondaInit');
// // console.log(honda.acelerar());

// const hondaInitDireto = Object.create(carro).init('HondaInitDireto');
// // console.log(hondaInitDireto.init('acelerar'));

// const ferrari = Object.create(carro).init('FerrariInitDireto');
// // console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// console.log(moto.acelerar()); // Error

// Object.assign(moto, funcaoAutomovel);

// console.log(moto.acelerar()); // acelerou

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     // value: 2,
//     // writable: true,
//     // enumerable: false,
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4;
//     },
//   },
// });

// moto.rodas = 3;
// console.log(moto); // 12

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//   window,
//   'innerHeight',
// );

// console.log(Object.keys(moto)); // (2) ["capacete", "_rodas"]
// console.log(Object.values(moto));
// console.log(Object.entries(moto));

// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));

// const frutas = ['Banana'];

// console.log(Object.getPrototypeOf(frutas)); // mesma coisa frutas.prototype ou Array.prototype
// console.log(Object.getPrototypeOf(2332)); // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// console.log(Object.is(frutas1, frutas1)); // true
// console.log(Object.is(frutas1, frutas2)); // false
// console.log(Object.is('oi', 'oi')); // false

// const novaFruta = frutas1;

// novaFruta[0] = 'Uva';

// console.log(novaFruta, frutas1);

// console.log(Object.is(frutas1, novaFruta)); // true

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// };

// Object.freeze(carro);
// Object.seal(carro);
// Object.preventExtensions(carro);

// delete carro.ano;

// carro.portas = 4;

// carro.marca = 'Honda';

// console.log(carro);

// console.log(Object.isSealed(carro));
// console.log(Object.isExtensible(carro));

const frutas3 = ['Banana', 'Pêra'];
const frase = 'Isso mesmo';
const somar = function (a, b) {
  return a + b;
};

const carro = {
  marca: 'Ford',
};

// console.log(frutas3.toString());
// console.log(frase.toString());
// console.log(somar.toString()); // retorna função (não executada)
// console.log(carro.toString()); // [object Object]

// Forma real de como verificar o TIPO DO OBJETO
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call('frutas3')); // [object String]
