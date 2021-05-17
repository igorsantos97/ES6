// window.alert('Hello World');

const href = window.location.href;
console.log(href);

if (
  href ===
  'http://127.0.0.1:5500/02-dom-para-iniciantes/o-que-e-o-dom/index.html'
) {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log('Clicou em', h1Selecionado.innerHTML);
}

h1Selecionado.addEventListener('click', teste);
