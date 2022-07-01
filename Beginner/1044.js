var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');
let intArray = values.map((x) => parseInt(x));
intArray.sort((x, y) => x-y);
let [a, b] = intArray;

if(b%a===0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}
