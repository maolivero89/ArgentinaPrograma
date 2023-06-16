const readlineSync = require('readline-sync');
let numEntero = readlineSync.question("Ingrese un numero entero entre 1 y 12: ");
let meses= [0, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let numero = Number(numEntero);

if(numero === 1 || numero === 3 || numero === 5 || numero === 7
     || numero === 10 || numero === 12) {
    console.log(`La cantidad de dias del mes de ${meses[numEntero]} es 31.`);
} else if(numero === 4 || numero === 6 || numero === 8 
    || numero === 9 || numero === 11) {
    console.log(`La cantidad de dias del mes de ${meses[numEntero]} es 30.`);
} else{
   console.log('La cantidad de dias del mes de Febrero es 28.');
}

