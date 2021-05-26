// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

function constroiObjCurso(cursoElement) {
  const titulo = cursoElement.querySelector('h1').innerText;
  const paragrafo = cursoElement.querySelector('p').innerText;
  const aulas = cursoElement.querySelector('span.aulas').innerText;
  const horas = cursoElement.querySelector('span.horas').innerText;

  return {
    titulo,
    paragrafo,
    aulas,
    horas,
  };
}

const objCursos = arrayCursos.map((curso) => {
  const resultObjCurso = constroiObjCurso(curso);

  return resultObjCurso;
});

console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQue100 = numeros.filter((numero) => {
  return numero > 100 && numero;
});

// console.log(numerosMaioresQue100); // [333, 122, 322]

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const existeBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});

const existeBaixo2 = instrumentos.includes('Baixo');

// console.log(existeBaixo); // true
// console.log(existeBaixo2); // true

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const totalCompra = compras.reduce((acc, compra) => {
  const precoLimpo = +compra.preco.replace('R$ ', '').replace(',', '.');

  return acc + precoLimpo;
}, 0);

console.log(totalCompra); // 49.42
console.log(
  totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
); // R$ 49,42
