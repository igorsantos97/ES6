// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let taxaRecebimento = 0;

// Solução alternativa (Quando eu quero somente verificar os 5 primeiros caracteres)
// transacoes.forEach((transacao) => {
//   if (transacao.descricao.slice(0,4) === 'Taxa') {
//     taxaTotal += +transacao.valor.replace('R$ ', '');
//   } else {
//     taxaRecebimento += +transacao.valor.replace('R$ ', '');
//   }
// });

transacoes.forEach((transacao) => {
  const valorLimpo = +transacao.valor.replace('R$ ', '');

  if (transacao.descricao.includes('Taxa')) {
    taxaTotal += valorLimpo;
  } else {
    taxaRecebimento += valorLimpo;
  }
});

// console.log('Total de Taxa: ' + taxaTotal); // 297
// console.log('Total de Recebimento: ' + taxaRecebimento); // 148

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');

// console.log(arrayTransportes); // ["Carro", "Avião", "Trem", "Ônibus", "Bicicleta"]

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

// resolução alternativa - tudo em uma linha
// html = html.split('span').join('a');

const htmlArray = html.split('span');
const novoHTML = htmlArray.join('a');

// console.log(novoHTML);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// console.log(frase.slice(-1)]); // !
// console.log(frase[frase.length - 1]); // !

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let totalTaxa = 0;

transacoes2.forEach((transacao) => {
  textTaxa = transacao.trimStart().toLowerCase().slice(0, 4);

  if (textTaxa === 'taxa') {
    totalTaxa++;
  }
});

console.log(totalTaxa); // 3
