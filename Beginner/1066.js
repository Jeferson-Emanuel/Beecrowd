var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = lines.map((x) => parseInt(x));
let even, odd, positive, negative = 0;

for(var i of numbers){
    if(i>=0){
        positive++;
        if(i%2===0){
            even++;
        }else{
            odd++;
        }
    }else{
        negative++;
        if(i%2===0){
            even++;
        }else{
            odd++;
        }
    }
}

console.log(`${even} valor(es) par(es)
${odd} valor(es) impar(es)
${positive} valor(es) positivo(s)
${negative} valor(es) negativo(s)`);