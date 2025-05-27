// Code tested using codepen.io

let horaStr = prompt("Bienvenido/a! Por favor escriba una hora con formato hh (1-24) sin minutos", "13");

try {
  let hora = parseInt(horaStr)

  if (hora > 6 && hora < 11) {
  console.log("Es desayuno");
} else if (hora > 11 && hora < 15) {
  console.log("Es almuerzo");
} else if (hora > 18 && hora < 23) {
  console.log("Es cena");
} else {
  console.log("Escriba otra hora, que la cocina está cerrada");
}
} catch {
  
}
  

  



