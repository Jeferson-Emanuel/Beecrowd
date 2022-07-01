var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');
let intArray = values.map((x) => parseInt(x));
let [x, y] = intArray;

const products = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

console.log(`Total: R$ ${(products[x]*y).toFixed(2)}`);

