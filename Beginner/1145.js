var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines[0].split(' ').map((v) => parseInt(v));
let counter = 0;

for(let i=1; i<=y; i+=x){
    let line = '';

    for(let j=1; j<=x; j++){
        line += `${++counter} `;
    }
    console.log(line.trim());//trim removes white spaces on the start and end of strings
}