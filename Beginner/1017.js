var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let tripTime = parseFloat(lines[0]);
let avgSpeed = parseFloat(lines[1]);

let needFuel = (tripTime*avgSpeed)/12;

console.log(`${needFuel.toFixed(3)}`);