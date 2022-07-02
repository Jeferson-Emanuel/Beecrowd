var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));
let [n] = value;

for(let i=2; i<=n; i+=2){
    if(i%2===0){
        console.log(`${i}^2 = ${i*i}`);
    }
}