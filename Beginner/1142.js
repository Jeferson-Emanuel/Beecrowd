var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [n] = lines.map((v) => parseInt(v));
let counter = 0;

for(let i=1; i<=n; i++){
    console.log(`${++counter} ${++counter} ${++counter} PUM`);
    counter++;
}