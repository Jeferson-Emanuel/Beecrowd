var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');

var codigoPeca1 = parseInt(line1[0]);
var qtdPeca1 = parseInt(line1[1]);
var precoPeca1 = parseFloat(line1[2]);

var codigoPeca2 = parseInt(line2[0]);
var qtdPeca2 = parseInt(line2[1]);
var precoPeca2 = parseFloat(line2[2]);

var valorPagar = qtdPeca1*precoPeca1+qtdPeca2*precoPeca2;

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);