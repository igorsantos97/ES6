// Crie uma função que verifique
// corretamente o tipo de dado
function whatIsTheDataType(date) {
  return Object.prototype.toString.call(date);
}

console.log(whatIsTheDataType('oi')); // [object String]
console.log(whatIsTheDataType({})); // [object Object]
console.log(whatIsTheDataType([])); // [object Array]

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    // por padrão você apenas defindo essa estrutura, a propriedade se torna imutável
  },
});

console.log(quadrado); // 4
quadrado.lados = 3;
console.log(quadrado); // 4

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333',
};

Object.freeze(configuracao); // O freeze faz tudo que o .seal() & .preventExtensions()

console.log(configuracao);

configuracao.width = 700;
delete configuracao.background;
configuracao.teste = 'Isso';

console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

// console.log(Object.getOwnPropertyDescriptors(String.prototype));
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// ou
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
