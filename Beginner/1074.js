var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const log = (x) => {
    let p1 = 'NULL', p2 = 'NEGATIVE';
    if(x===0){
        return `${p1}`;
    }else if(x%2===0){
        p1 = 'EVEN'
        if(x>0){
            p2 = 'POSITIVE'
        };
        return `${p1} ${p2}`;
    }else{
        p1 = 'ODD'
        if(x>0){
            p2 = 'POSITIVE'
        };
        return `${p1} ${p2}`;
    }
}

let value = lines.map((x) => parseInt(x));
let [n] = value;

for(let i=1; i<=n; i++){
    console.log(log(value[i]));
};

