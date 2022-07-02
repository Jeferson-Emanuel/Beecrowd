var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const fuels = {
    1: 0,
    2: 0,
    3: 0
}

for(let i=0; i<lines.length; i++){
    let fuelType = parseInt(lines[i]);

    if(fuelType==4){
        break;
    }else if(fuelType<4){
        fuels[fuelType]++;
    }
}

console.log(`MUITO OBRIGADO
Alcool: ${fuels[1]}
Gasolina: ${fuels[2]}
Diesel: ${fuels[3]}`);