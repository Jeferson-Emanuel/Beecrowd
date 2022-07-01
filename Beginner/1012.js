var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');

let a = parseFloat(values[0]);
let b = parseFloat(values[1]);
let c = parseFloat(values[2]);

let triArea = (a*c)/2;
let cirArea = Math.PI.toFixed(5)*Math.pow(c, 2);
let traArea = ((a+b)*c)/2;
let quaArea = Math.pow(b, 2);
let retArea = a*b;

console.log(`TRIANGULO: ${triArea.toFixed(3)}
CIRCULO: ${cirArea.toFixed(3)}
TRAPEZIO: ${traArea.toFixed(3)}
QUADRADO: ${quaArea.toFixed(3)}
RETANGULO: ${retArea.toFixed(3)}`
);