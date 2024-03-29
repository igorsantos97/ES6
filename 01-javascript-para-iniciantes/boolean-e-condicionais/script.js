// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23;
var parenteIdade = 50;

if (minhaIdade > parenteIdade) {
  console.log('É maior');
} else if (minhaIdade === parenteIdade) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2; // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('O Brasil tem mais habitantes');
} else {
  console.log('A china tem mais habitantes');
}

// O que irá aparecer no console? -> Falso
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// // O que irá aparecer no console? -> Cão
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão'); // Cão
} else {
  console.log('Falso');
}
