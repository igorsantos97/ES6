function areaQuadrado(lado) {
  return lado * lado;
}

// console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}

var total = 5 * pi();
// console.log(pi);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

// console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de nada';
  }
}

// console.log(corFavorita());

function mostraConsole() {
  console.log('oi');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

// imc2(80, 1.8); // retorna a imc
// console.log(imc2(80, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// console.log(terceiraIdade('ddd'));

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

// console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;

  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }

  return outrosDados();
}

// console.log(dados());
