var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));
value.sort((a, b) => a-b);
let [x, y] = value;
let sum = 0;

for(let i=x+1; i<y; i++){
    if(i%2!==0){
        sum+=i;
    }
}

console.log(sum);
