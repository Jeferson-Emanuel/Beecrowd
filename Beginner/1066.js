var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const evenOdd = (p) => {
    if(p%2===0){
        even++;
    }else{
        odd++;
    }
};

let numbers = lines.map((x) => parseInt(x));
let even=0, odd=0, positive=0, negative=0;

for(let i=0; i<5; i++){
    let n = numbers[i];
    if(n>=0){
        if(n!==0){
            positive++;
            evenOdd(n);
        }else{
            evenOdd(n);
        }        
    }else{
        negative++;
        evenOdd(n);
    }
}

console.log(`${even} valor(es) par(es)
${odd} valor(es) impar(es)
${positive} valor(es) positivo(s)
${negative} valor(es) negativo(s)`);