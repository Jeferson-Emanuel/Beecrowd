var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');
let intArray = values.map((x) => parseInt(x));
let [a, b] = intArray;

if((a>=b)){
    console.log(`O JOGO DUROU ${(24-a)+b} HORA(S)`);
}else{
    console.log(`O JOGO DUROU ${b-a} HORA(S)`);
}