var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');
let intArray = values.map((x) => parseInt(x));
let [a, b, c, d] = intArray;

let isAccepted = ((b>c)&&(d>a)) && ((c+d)>(a+b)) && (c>0 && d>0) && (a%2===0);

if(isAccepted){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}