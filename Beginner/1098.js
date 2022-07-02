var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 0;

for(let i=0; i<=2; i=counter){
    for(let j=(1+counter); j<=(3+counter); j++){
        if((i.toFixed(1)%2===0) || (i.toFixed(1)%2==1)){
            console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`);
        }else{
            console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
        }        
    }
    counter+=0.2;
}