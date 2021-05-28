// const h1 = document.querySelector('h1');
// // console.log(Object.prototype.toString.call(h1));

// console.log(h1.dataset);

const div = document.querySelector('[data-cor]');
// console.log(Object.prototype.toString.call(h1));

console.log(div.dataset.cor);

div.dataset.height = 1000;

div.dataset.totalHeight = 2000;

delete div.dataset.width;

console.log(div.dataset);
