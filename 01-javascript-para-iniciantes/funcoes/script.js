// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}

// console.log(isTruthy('oi')); // true

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lados) {
  return lados * 4;
}

// console.log(perimetroQuadrado(4)); // 16

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// console.log(nomeCompleto('Igor', 'Santos')); // Igor Santos

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number == '' || typeof number !== 'number')
    return 'Digite um número e/ou um valor válido';

  return number % 2 === 0 ? 'É par' : 'É impar';
}

// console.log(isEven(97)); // impar

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function whatIsTypeof(value) {
  return typeof value;
}

// console.log(whatIsTypeof('')); // string

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function showName() {
  console.log('Igor Santos');
}

addEventListener('scroll', showName);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
