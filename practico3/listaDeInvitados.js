let nombres = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let admitidos = [];
let rechazados= [];
let infoAdmitidos = 'La lista de invitados admitidos es: '
let infoRechazados = "La lista de invitados rechazados es: "

for (let i=0; i < nombres.length; i++) {
    if(nombres[i]== 'Sofia' || nombres[i]== 'Jose') {
        rechazados.push(nombres[i])
        } else {
        admitidos.push(nombres[i])
        }
    }
for (let i=0; i < rechazados.length; i++){
    if(i === rechazados.length -1) {
        infoRechazados = infoRechazados.slice(0, infoRechazados.length -2)
        infoRechazados += ' y ' + rechazados[i] + '.' ;
        
    } else {
     infoRechazados += rechazados[i] + ', ';   
    } console.log(infoRechazados);
  }
for (let i=0; i < admitidos.length; i++){
    if(i === admitidos.length -1) {
        infoAdmitidos = infoAdmitidos.slice(0, infoAdmitidos.length -2)
        infoAdmitidos += ' y ' + admitidos[i] + '.' ;
        
    } else {
     infoAdmitidos += admitidos[i] + ', ';   
    } console.log(infoAdmitidos);
  }