const readlineSync = require('readline-sync');
const edad = readlineSync.question('Ingrese aqui su edad: ');
let edadNumero = Number(edad);

if(edadNumero >= 18) {
console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.')
}