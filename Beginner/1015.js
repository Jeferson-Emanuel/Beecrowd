var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines[0].split(' ');
let line2 = lines[1].split(' ');

let x1 = parseFloat(line1[0]);
let y1 = parseFloat(line1[1]);
let x2 = parseFloat(line2[0]);
let y2 = parseFloat(line2[1]);

let distance = Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2));

console.log(distance.toFixed(4));

