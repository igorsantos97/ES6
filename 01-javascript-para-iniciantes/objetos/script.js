// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var personalData = {
  name: 'Igor',
  lastName: 'Santos',
  state: 'São Paulo',
};

// Crie um método no objeto anterior, que mostre o seu nome completo
personalData.showFullName = function () {
  console.log(`${this.name} ${this.lastName}`);
};

// console.log(personalData.showFullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;
// console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
  breed: 'labrador',
  color: 'preto',
  age: 10,
  sawAMan(value) {
    value === true
      ? console.log('O cachorrou latiu')
      : console.log('O cachorro não fez nada');
  },
};

console.log(dog.sawAMan(true)); // O cachorro latiu
