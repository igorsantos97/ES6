// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector('.faq dt');
console.log(firstDT);

// Selecione o DD referente ao primeiro DT
const firstDD = firstDT.nextElementSibling;
console.log(firstDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

// faq.outerHTML = animais; // retorna: [object HTMLElement]
faq.innerHTML = animais.innerHTML;
