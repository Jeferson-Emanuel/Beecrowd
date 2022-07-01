var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0])*2;
var b = parseFloat(lines[1])*3;
var c = parseFloat(lines[2])*5;
var media = (a+b+c)/(2+3+5);

console.log(`MEDIA = ${media.toFixed(1)}`);