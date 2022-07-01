var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');

let a = parseInt(values[0]);
let b = parseInt(values[1]);
let c = parseInt(values[2]);

const formula = (x, y) => (x+y+Math.abs(x-y))/2;

let maior = formula(formula(a,b), c);

console.log(`${maior} eh o maior`);

