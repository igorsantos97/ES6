// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
  item.classList.add('active');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => {
  item.classList.remove('active');
});

menuItens[0].classList.add('active');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  console.log(img, img.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const externalLink = document.querySelector('.menu a[href^="http"]');

externalLink.setAttribute('href', 'https://google.com.br');
