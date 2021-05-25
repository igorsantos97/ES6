// console.log(Number.isNaN(NaN)); //true
// console.log(Number.isInteger(10)); // true
// console.log(Number.isInteger(10.5)); // false

// console.log(parseFloat('10,532230')); // 10
// console.log(parseFloat('10.532230')); // 10.53223
// console.log(parseFloat('reais 10.532230')); // NaN
// console.log(parseFloat('10.532 reais')); // 10.532

// console.log(parseInt('ssdsd 100 reais')); // NaN
// console.log(parseInt('100 reais')); // 100
// console.log(parseInt('100.876 reais')); // 100
// console.log(parseInt('100.23323', 10)); // 100

// // Métodos do protótipos
// const preco = 2.99;
// console.log(preco.toFixed()); // 3
// console.log(preco.toFixed() + 2343); // 32343 (concatena)
// console.log(+preco.toFixed() + 2343); // 2346
// console.log(preco.toFixed(10)); //"2.9900000000"

// console.log((30.6).toFixed()); // 31 #### Sem o parenteses não é possível usar o n.toFixed()

// let valor = 48.49;
// let valor2 = 48.49;
// valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
// valor2 = valor2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

// console.log(valor); //R$ 48,49
// console.log(valor2); //$48.49

// console.log(Math.PI);
// console.log(Math.abs(-5)); // 5
// console.log(Math.ceil(5.1)); // 6
// console.log(Math.floor(5.9)); // 5
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.49)); // 4
// console.log(Math.round(4.5)); // 5

// console.log(Math.PI);

// console.log(Math.max(3, 445, 5544, 4554, 'oi')); // NaN
// console.log(Math.max(3, 445, 5544, 4554)); // 5544

// 0 á 100;
// console.log(Math.random() * 100);

// 0 á 10
const aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);

console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
// O que está no parenteses sendo calculado é o valor máximo
// E o último valor (32) é o valor minímo
