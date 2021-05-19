// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const internalLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();

  internalLinks.forEach((link) => {
    link.classList.remove('active');
  });

  event.target.classList.add('active');
}

internalLinks.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

function handleClickBodyElements(event) {
  console.log(event.currentTarget);
  event.currentTarget.remove();
}

allElements.forEach((element) => {
  // element.addEventListener('click', handleClickBodyElements);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeydown(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('largeText');
  }
}

window.addEventListener('keydown', handleKeydown);
