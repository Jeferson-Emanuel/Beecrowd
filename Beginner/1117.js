var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let nota1, nota2;

for(let i=0; i<lines.length; i++){
    let temp = parseFloat(lines[i]);

    if(nota1 && nota2){
        break;
    }

    if(temp<0 || temp>10){
        console.log('nota invalida');
    }else{
        if(nota1){
            nota2 = temp;
        }else{
            nota1 = temp;
        }
    }
}

console.log(`media = ${((nota1+nota2)/2).toFixed(2)}`);