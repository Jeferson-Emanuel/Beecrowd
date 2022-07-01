var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseFloat(lines[1]);

let avgConsumption = x/y;

console.log(`${avgConsumption.toFixed(3)} km/l`);

