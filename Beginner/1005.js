var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0])*3.5;
var b = parseFloat(lines[1])*7.5;
var media = (a+b)/(3.5+7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);