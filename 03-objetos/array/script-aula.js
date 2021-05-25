// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String('Tipo 1'),
//   ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// dados[2]('Ford');
// dados[1][2].cor; // azul

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Tesla';

// console.log(carros.length);

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li);

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   4: 'Teste',
//   length: 3, // sem a propriedade length não é possível usar o método Array.from(), caso ao contrário mesmo tentando será retornado uma ARRAY VAZIA
// };

// obj[2] // undefined
// obj[3] // undefined

// console.log(obj);

// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

// console.log(Array.isArray('nsdjk')); // false
// console.log(Array.isArray(obj)); // false (objeto que se parece um array - array-like)
// console.log(Array.isArray(li)); // false -  NodeList array-like
// console.log(Array.isArray([])); // true

// console.log(Array.of(10)); // [10]
// console.log(Array.of(1, 2, 3, 4, '5')); // [1, 2, 3, 4, "5"]
// console.log(Array(20)); // (20) [empty × 20]

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// // console.log(frutas[1].length); // 4
// console.log(frutas[2][0].length); // 8 (Uva Roxa)

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrai');
carros.push('Parati', 'Gol');

const novaArray = carros.push('Parati', 'Gol');
novaArray; // 9 - o retorno de push e unshit é o length do array e não a array em sí

// console.log(carros);
// console.log(carros.pop()); // Gol
// console.log(carros.shift()); // Kia
// console.log(carros);

// console.log(carros);
// console.log(carros.reverse());

// console.log(carros); // (9) ["Kia", "Ferrai", "Ford", "Fiat", "VW", "Parati", "Gol", "Parati", "Gol"]

// carros.splice(2, 0, 'Fusca');
// console.log(carros); // (10) ["Kia", "Ferrai", "Fusca", "Ford", "Fiat", "VW", "Parati", "Gol", "Parati", "Gol"]

// carros.splice(1, 1, 'NEW Fusca');
// console.log(carros); // (10) ["Kia", "NEW Fusca", "Fusca", "Ford", "Fiat", "VW", "Parati", "Gol", "Parati", "Gol"]

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// console.log(linguagens.includes('js')); // true
// console.log(linguagens.includes('ruby')); // false

// console.log(linguagens.indexOf('js')); // 2
// console.log(linguagens.indexOf('ruby')); // -1 (não tem)

// let htmlString = '<h2>Título Principal</h2>';

// htmlString = htmlString.split('h2').join('span');

// console.log(htmlString);

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];

// console.log(linguagens2.slice(2, 3)); // ["js"]
// console.log(linguagens2.slice(2, 4)); // ["js", "php"]

const cloneLinguagens = linguagens2.slice();

cloneLinguagens.pop();

console.log(linguagens2); // (5) ["html", "css", "js", "php", "python"]
console.log(cloneLinguagens); // (4) ["html", "css", "js", "php"]
