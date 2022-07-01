var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var firstName = parseInt(lines[0]);
var salary = parseInt(lines[1]);
var sales = parseFloat(lines[2]);
var totalSalary = (salary+sales*0.15).toFixed(2);

console.log(`TOTAL = R$ ${totalSalary}`);