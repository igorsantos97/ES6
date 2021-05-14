var pessoa = {
  nome: 'André',
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
  cinco() {
    return 5;
  },
};

// console.log(quadrado.cinco());
// console.log(Math.random());

var height = 100;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2; // 25
  },
};

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function () {
  console.log('Escondi');
};

var bg = menu.backgroundColor;
