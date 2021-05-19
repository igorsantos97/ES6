// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-lista');
// const animaisListaDesc = document.querySelector('.animais-descricao');

// console.log(h1.innerText); // Animais Fantásticos
// console.log(h1.outerHTML); // <h1 class="titulo">Animais Fantásticos</h1>

// h1.outerHTML = '<p class="titulo">Animais fantáticos</p>'; // pega o próprio h1 e substitui com o conteúdo novo
// h1.innerHTML = '<span class="">Animais fantáticos</span>'; // inseri o novo conteúdo DENTRO do H1

const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement);
// console.log(lista.previousElementSibling);

// console.log(lista.children);
// console.log(lista.children[lista.children.length - 1]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes[1].textContent); // Isso é um comentário
// console.log(lista.previousSibling); // retorna o 'enter'

// console.log(lista.firstChild); // # text (objeto)
// console.log(lista.firstChild.nextSibling); //  <!-- Isso é um comentário -->
// console.log(lista.firstChild.nextSibling.nextSibling.nextSibling); //  <li>

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);

// animais.appendChild(titulo);
// contato.insertBefore(animais, mapa);

const novoh1 = document.createElement('h1');

// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);
