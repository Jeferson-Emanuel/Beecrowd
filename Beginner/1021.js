var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseFloat(lines[0]);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:');
notas.forEach(n => {
    console.log(`${parseInt(value/n)} nota(s) de R$ ${n.toFixed(2)}`);
    value=value%n;
});

console.log('MOEDAS:');
moedas.forEach(m => {
    console.log(`${parseInt(value/m)} moeda(s) de R$ ${m.toFixed(2)}`);
    value=(value%m)+0.00001;//Tive de pesquisar na internet pra descobrir que precisava essa soma(https://pt.stackoverflow.com/questions/420472/uri-online-judge-1021-wrong-answer-100-javascript)
});