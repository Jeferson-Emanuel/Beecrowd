var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines[0]);

let years = Math.floor(value/365);
let remaining = value%365;

let months = Math.floor(remaining/30);
remaining = remaining%30;

let days = remaining;

console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`);