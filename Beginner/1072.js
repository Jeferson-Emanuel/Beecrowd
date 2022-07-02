var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = lines.map((x) => parseInt(x));
let [n] = value;
let numIn = 0, numOut = 0;

for(let i=1; i<=n; i++){
    if(value[i]>=10 && value[i]<=20){
        numIn++;
    }else{
        numOut++;
    }
}

console.log(`${numIn} in
${numOut} out`);
