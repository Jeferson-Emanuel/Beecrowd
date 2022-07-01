var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines[0]);

let qtd100 = Math.floor(value/100);
let remaining = value%100;

let qtd50 = Math.floor(remaining/50);
remaining = remaining%50;

let qtd20 = Math.floor(remaining/20);
remaining = remaining%20;

let qtd10 = Math.floor(remaining/10);
remaining = remaining%10;

let qtd5 = Math.floor(remaining/5);
remaining = remaining%5;

let qtd2 = Math.floor(remaining/2);
remaining = remaining%2;

let qtd1 = remaining;

console.log(`${value}
${qtd100} nota(s) de R$ 100,00
${qtd50} nota(s) de R$ 50,00
${qtd20} nota(s) de R$ 20,00
${qtd10} nota(s) de R$ 10,00
${qtd5} nota(s) de R$ 5,00
${qtd2} nota(s) de R$ 2,00
${qtd1} nota(s) de R$ 1,00`);