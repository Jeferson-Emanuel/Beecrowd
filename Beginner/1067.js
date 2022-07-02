const { countReset } = require('console');

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));

for(let i=1; i<=value[0]; i++){
    if(i%2!==0){
        console.log(i);
    }
}

