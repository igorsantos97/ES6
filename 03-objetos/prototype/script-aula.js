function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

// Quando crio um método/propriedade direto no prototype eu consigo
// Acessar DIRETAMENTE ele(s) sem precisar instanciar a função
Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' Pessoa nadou';
};

// console.log(Pessoa.prototype.andar()); // "undefined Pessoa andou"

const andre = new Pessoa('Andre', 28);

// console.log(andre.andar()); // Andre Pessoa andou
// console.log(andre.nadar()); // Andre Pessoa nadou

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// Transformar em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
// console.log(listaArray1);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'Oi';
  },
};
