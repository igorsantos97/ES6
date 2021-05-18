// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');

console.log('offsetTop ' + firstImg.offsetTop);
console.log('getBoundingClientRect ' + firstImg.getBoundingClientRect().top);

// Retorne a soma da largura de todas as imagens
function fullWidthImages() {
  const imgs = document.querySelectorAll('img');
  let acumulatorWidth = 0;

  imgs.forEach((img) => {
    acumulatorWidth += img.offsetWidth;
  });

  console.log('Soma total das imagens ' + acumulatorWidth);
}

// window.addEventListener('load', fullWidthImages);
// ou
window.onload = fullWidthImages;

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkReact = link.getBoundingClientRect();
  const linkHeight = linkReact.height;
  const linkWidth = linkReact.width;
  // const { height: linkHeight, width: linkWidth } = link.getBoundingClientRect();

  console.log(linkHeight, linkWidth);
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log('Está no padrão Google');
  } else {
    console.log('Não está no padrão Google');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;

if (small) {
  const menuMobile = document.querySelector('.menu');
  menuMobile.classList.add('menu-mobile');
}
