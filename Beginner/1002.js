var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const π = 3.14159;
let R = Number(lines[0]);
let circleArea = (π*(R*R)).toFixed(4);

console.log(`A=${circleArea}`);