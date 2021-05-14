// var videoGames = ['Switch', 'PS4', 'XBOX'];
// videoGames.push('3DS');

// var ultimoItem = videoGames.pop(); // 3DS

// for (var numero = 1; numero <= 10; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item]);
//   if (videoGames[item] === 'PS4') {
//     break;
//   }
// }

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
