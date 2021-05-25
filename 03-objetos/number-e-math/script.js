// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;
const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'.split(', ');

// Solução Alternativa
// let numeroMaior = 0;
// numeros.split(', ').forEach((num) => {
//   if (+num > numeroMaior) {
//     numeroMaior = +num;
//   }
// });
// console.log(numeroMaior); // 20

const numeroMaior = Math.max(...numeros);
console.log(numeroMaior); // 20

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let somaTotal = 0;

function limparPrecos(precoRecebido) {
  precoRecebido = +precoRecebido
    .toUpperCase()
    .replace('R$ ', '')
    .trim()
    .replace(',', '.');

  precoRecebido = +precoRecebido.toFixed(2);

  return precoRecebido;
}

listaPrecos.forEach((preco) => {
  somaTotal += limparPrecos(preco);
});

console.log(somaTotal); // 590.212
console.log(
  somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
); // R$ 590,21
console.log(
  somaTotal.toLocaleString('es-US', { style: 'currency', currency: 'USD' }),
); // $590.21
