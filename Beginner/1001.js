var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b] = lines;

console.log(`X = ${Number(a)+Number(b)}`);