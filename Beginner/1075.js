var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));
let [n] = value;

for(let i=1; i<10000; i++){
    if(i%n==2){
        console.log(i);
    }
}
