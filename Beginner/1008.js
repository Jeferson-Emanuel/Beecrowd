var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var worked = parseInt(lines[1]);
var perHour = parseFloat(lines[2]);
var salary = (worked*perHour).toFixed(2);

console.log(`NUMBER = ${number}
SALARY = U$ ${salary}`);