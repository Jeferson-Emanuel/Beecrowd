var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
let R = lines[0];

let sphereVolume = (4/3)*pi*(Math.pow(R,3));

console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);