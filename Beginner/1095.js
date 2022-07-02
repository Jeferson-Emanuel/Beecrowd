var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 1;

for(let i=60; i>=0; i-=5){
    console.log(`I=${counter} J=${i}`);
    counter+=3;
}