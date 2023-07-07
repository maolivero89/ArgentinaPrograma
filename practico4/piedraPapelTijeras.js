const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
  let valoresJuego = ["Piedra", "Papel", "Tijeras"];
   return valoresJuego[Math.floor(Math.random() * valoresJuego.length)];
    }

let jugadaComputadora = obtenerJugadaComputadora();
 
function obtenerJugadaUsuario() {
  let valoresPosibles = readlineSync.question('Elija una opcion, Piedra, Papel o Tijeras: ');
  while (!['Piedra', 'Papel', 'Tijeras'].includes(valoresPosibles)) {
    console.clear();
    console.log("La opcion ingresada es incorrecta, por favor ingrese nuevamente")
    valoresPosibles = obtenerJugadaUsuario();
   }
  console.log(`El usuario eligio: ${valoresPosibles}`);
  return valoresPosibles;
} 

jugadaUsuario = obtenerJugadaUsuario();
console.log(`La computadora eligio: ${jugadaComputadora}`);

 function obtenerGanador(jugadaUsuario, jugadaComputadora) {
  let ganador;
      if(jugadaComputadora === jugadaUsuario){
    return console.log("Empate")

   } else if(jugadaUsuario === "Papel") {

   if(jugadaComputadora === "Piedra") return console.log("Gana el Usuario");
   if(jugadaComputadora === "Tijeras") return console.log("Gana la computadora");

} else if(jugadaUsuario === "Piedra") {

    if(jugadaComputadora === "Tijeras") return console.log("Gana el Usuario");
    if(jugadaComputadora === "Papel") return console.log("Gana la computadora");

 } else if(jugadaUsuario === "Tijeras") {

   if(jugadaComputadora === "Papel") return console.log("Gana el Usuario");
   if(jugadaComputadora === "Piedra") return console.log("Gana la computadora");
 }
 return ganador;
}

ganador = obtenerGanador(jugadaUsuario, jugadaComputadora);