var nome = 'André';
var idade = 23;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(typeof frase); // string;

var ano = '2018';
var mes = 8;

// console.log('Javascript é "fácil"');

console.log('Isso mesmo');

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2} gols`;

console.log(frase2);
