// const comida = 'Pizza';
// const agua = new String('Agua ');

// console.log(agua.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt([frase.length - 1]));

// const liguagem = 'JavaScript';
// console.log(liguagem.charAt(0));

const frase = 'A melhor liguagem é: ';
const liguagem = 'JavaScript';

// const fraseFinal = frase + liguagem + '!!'; // é a mesma coisa que o exemplo com concat
const fraseFinal = frase.concat(liguagem, '!!');

const fruta = 'Banana';
const listaFruta = 'Melancia, Banana, Laranja';

// console.log(listaFruta.includes(fruta)); // true
// console.log(listaFruta.includes(fruta, 14)); // false - segundo parametro: "começa a partir do indice tal"

// console.log(fruta.startsWith('Ba')); // true
// console.log(fruta.startsWith('ba')); // false (case sensitive)
// console.log(fruta.startsWith('na')); // false

// console.log(fruta.endsWith('na')); // true
// console.log(fruta.endsWith('nana')); // true

// console.log(fruta); // fruta (não altera nada)

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0, 1)); // D
// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao1.slice(12)); // cliente

// console.log(transacao3.slice(1)); // axa de camisas
// console.log(transacao1.slice(0, -2)); // Depósito de clien

// console.log(fruta.indexOf('B')); // 0
// console.log(fruta.indexOf('n')); // 2 (primeiro)
// console.log(fruta.indexOf('na')); // 2 - "n"a começa no index 4

// console.log(fruta.lastIndexOf('n')); // 4 (último)
// console.log(fruta.lastIndexOf('na')); // 4 - "n"a começa no index 4

// const preco = 'R$ 99,00';
// console.log(preco.padStart(20)); // preenche com espaço
// console.log(preco.padStart(20, '.')); // preenche com ponto
// console.log(preco.padEnd(20, '.')); // preenche com ponto

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(8, '-')); // alinhando para lado direto no console
// });

// const frase2 = 'Ta';
// console.log(frase2.repeat(5)); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); // Camisas, Bonés, Calças, Bermudas, Vestidos, Saias

// let listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens2 = listaItens2.replace('Camisas', 'Shirts'); // Shirts Bonés Calças Bermudas Vestidos Saias
// listaItens2 = listaItens2.replace(' ', ', '); // Camisas, Bonés Calças Bermudas Vestidos Saias

// console.log(listaItens2);

// const arrayLista = listaItens;
// console.log(arrayLista.split('s, '));

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

// console.log(novoHtml); // <section>O melhor item</section><section>A melhor lista</section>

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino'); // true
console.log(sexo2.toLowerCase() === 'feminino'); // true
console.log(sexo3.toLowerCase() === 'feminino'); // true

const valor = '  R$ 23.00   ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
