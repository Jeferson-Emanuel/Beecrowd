var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [n] = lines.map((y) => parseInt(y));

for(let i=1; i<=n; i++){
    let temp = lines[i].split(' ');
    let line = temp.map((x) => parseFloat(x));
    let weightedAvg = (line[0]*2+line[1]*3+line[2]*5)/(2+3+5);

    console.log(`${weightedAvg.toFixed(1)}`);
}