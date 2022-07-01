var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines[0]);

let hours = Math.floor(value/3600);
let remaining = value%3600;

let minutes = Math.floor(remaining/60);
remaining = remaining%60;

let seconds = remaining;

console.log(`${hours}:${minutes}:${seconds}`);