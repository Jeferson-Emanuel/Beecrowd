var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 7;

for(let i=1; i<10; i+=2){
    for(let j=counter; j>(counter-3); j--){
        console.log(`I=${i} J=${j}`);
    }
    counter+=2;
}