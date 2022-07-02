var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));
let [x] = value;

if(x%2===0){
    x++;
    for(let i=0; i<6; i++){
        console.log(x);
        x+=2;
    }
}else{
    for(let i=0; i<6; i++){
        console.log(x);
        x+=2;
    }
}