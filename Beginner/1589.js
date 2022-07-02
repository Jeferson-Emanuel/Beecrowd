var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [t] = lines.map((a) => parseInt(a));

for(let i=1; i<=t; i++){
    let [r1, r2] = lines[i].split(' ').map((v) => parseInt(v));
    console.log(`${r1+r2}`);
}
