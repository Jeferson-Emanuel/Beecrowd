var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const locations = {
    61: 'Brasilia',
    71: 'Salvador',
    11: 'Sao Paulo',
    21: 'Rio de Janeiro',
    32: 'Juiz de Fora',
    19: 'Campinas',
    27: 'Vitoria',
    31: 'Belo Horizonte',
    default: 'DDD nao cadastrado'
}

console.log(`${locations[parseInt(lines[0])] || locations.default}`);