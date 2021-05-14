// nomeie 3 propriedades ou métodos de strings
// length
// toLowerCase
// charAt

// nomeie 5 propriedades ou métodos de elementos do DOM
// addEventListenner
// innerText
// classList
// querySelector
// id

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var button = document.querySelector('button');

function handleClick() {
  // Valido somente com input
  var input = document.querySelector('input');
  input.select();

  document.execCommand('copy');

  alert('Copied the text ' + input.value);
}

button.addEventListener('click', handleClick);
