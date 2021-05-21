function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida || 'Marca Default';
  this.preco = precoAtribuido || 'Preço Default';
}

const teste = new Carro(''); // Marca & Preço default
const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

fiat.marca = 'Fiat';

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
