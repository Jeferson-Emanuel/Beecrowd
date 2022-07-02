var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = lines.map((x) => parseInt(x));
let counter = 0;

for(let i=0; i<=numbers.length; i++){
    if(i%2===0){
        counter++;
    }
}

console.log(`${counter} valores pares`);