// Code tested using codepen.io


let menu_desayuno = {
  1:{"tostadas": 2.5},
  2:{"cereales": 3.0},
  3:{"huevos": 4.0},
  4:{"fruta": 1.5},
}


let menu_almuerzo = {
  1:{"ensalada": 6.5},
  2:{"hamburguesa": 8.0},
  3:{"pasta": 7.0},
  4:{"sopa": 5.0},
  
}

let menu_cena = {
  1:{"pescado": 9.0},
  2:{"pollo": 8.5},
  3:{"verduras": 7.0},
  4:{"arroz": 6.0}
}


let opciones_cliente = []


let horaStr = prompt("Bienvenido/a! Por favor escriba una hora con formato hh (1-24) sin minutos", "13");

try {
  let hora = parseInt(horaStr);
  if (isNaN(hora)) throw new Error();

  let menuSeleccionado;
  if (hora > 6 && hora < 11) {
    menuSeleccionado = menu_desayuno;
    console.log("Es desayuno");
  } else if (hora > 11 && hora < 15) {
    menuSeleccionado = menu_almuerzo;
    console.log("Es almuerzo");
  } else if (hora > 18 && hora < 23) {
    menuSeleccionado = menu_cena;
    console.log("Es cena");
  }

  if (menuSeleccionado) {
    console.log("El menú actual es:", menuSeleccionado);
  } else {
    console.log("Escribe otra hora, que la cocina está cerrada");
  }
} catch {
  alert("Problema con la hora escrita. Debes introducir un número entero (1-24).");
}

  

  



