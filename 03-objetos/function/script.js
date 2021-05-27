// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const qtdeTotalCaracteres = Array.prototype.reduce.bind(
  paragrafos,
  (acc, paragrafo) => {
    return acc + paragrafo.innerText.length;
  },
  0,
);

console.log(qtdeTotalCaracteres());

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo) {
  const element = document.createElement(tag);

  classe ? element.classList.add(classe) : null;
  conteudo ? (element.innerText = conteudo) : null;

  return element;
}

console.log(novoElemento('li', 'ativar', 'Isso é um conteúdo'));
console.log(novoElemento('li'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const elementoH1 = novoElemento.bind(null, 'h1', 'titulo');

console.log(elementoH1('Isso é um título do H1')); // <h1 class="titulo">Isso é um título do H1</h1>
