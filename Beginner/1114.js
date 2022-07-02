var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let password = '';
let counter = 0;

do{
    password = parseInt(lines[counter]);

    if(password==2002){
        console.log('Acesso Permitido');
    }else{
        console.log('Senha Invalida');
    }

    counter++;
}while(password!==2002);
