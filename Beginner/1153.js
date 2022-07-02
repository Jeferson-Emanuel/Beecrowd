var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [n] = lines.map((v) => parseInt(v));

const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
};

console.log(factorial(n));