var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [n] = lines.map((a) => parseInt(a));

for(let i=1; i<=n; i++){
    let [x, y] = lines[i].split(' ').map((b) => parseFloat(b));

    if(y===0){
        console.log('divisao impossivel');
    }else{
        console.log((x/y).toFixed(1));
    }
}