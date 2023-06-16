const readlineSync = require('readline-sync');
let numEntero = readlineSync.question("Ingrese un numero: ");
let numero = Number(numEntero);

if(numero > 0) {
    console.log('El numero es positivo.');
} else if (numero < 0) {
    console.log('El numero es negativo.')
} else {
    console.log('El numero es cero.')
}