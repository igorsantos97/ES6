const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

// console.log(menu.className);

const animais = document.querySelector('.animais');

// console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const altImg = img.getAttribute('alt');
console.log(altImg); // Pegará o valor antigo e não o novo valor de Alt (linha 26)

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt); // true

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}`);
  },
};
