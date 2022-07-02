var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let arrayCounter = 0;
let [x, y] = lines[arrayCounter].split(' ').map((v) => parseInt(v));

while(x!==0 && y!==0){
    if(x>0){
        if(y>0){
            console.log('primeiro');
        }else{
            console.log('quarto');
        }
    }else{
        if(y>0){
            console.log('segundo');
        }else{
            console.log('terceiro');
        }
    }

    arrayCounter++;
    [x, y] = lines[arrayCounter].split(' ').map((v) => parseInt(v));
}