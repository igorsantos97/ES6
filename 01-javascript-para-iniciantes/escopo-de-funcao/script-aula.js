'use strict';

var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro();
console.log(carro);

if (false) {
  const mes = 'Dezembro';
  console.log(mes);
}

// console.log(mes); // Error

{
  var carro2 = 'Fusca 2 ';
  const ano = 2018;
}

// console.log(carro2); // Carro
// console.log(ano); // Error

var i = 50;

// for (let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

// console.log(i); // 50

// console.log(semana); // Error
const semana = 'Sexta';
// const semana = 'Quinta'; // Error
// semana = 'Quinta'; // Error

const data = {
  ano: 2018,
  mes: 'Dezembro',
};

data.ano = 2019;
data.dia = 25;
// data = 'Isso mesmo'; Error

// console.log(data);
