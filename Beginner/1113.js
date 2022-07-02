var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 0;
let [x, y] = lines[counter].split(' ').map((a) => parseInt(a));

while(x!=y){
    if(x<y){
        console.log('Crescente');
    }else{
        console.log('Decrescente');
    }
    
    counter++;
    /* let lineA = lines[i].split(' ');
    let lineB = lineA.map((a) => parseInt(a));
    let [x, y] = lineB; */
    [x, y] = lines[counter].split(' ').map((a) => parseInt(a));
}