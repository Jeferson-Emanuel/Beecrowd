var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(lines[0]);

let timeNeeded = distance*2;

console.log(`${timeNeeded} minutos`);