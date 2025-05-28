// Code tested using codepen.io
// usando de referencia menu: https://codebilbao.es/wp-content/uploads/2021/06/180621.pdf
// cena: https://web.ua.es/es/universidad-saludable/documentos/menus-saludables.pdf




let menuDesayuno = {
  primerPlato:{1:{"tostadas": 2.5},
               2:{"cereales": 3.0},
               3:{"fruta": 1.5}},
  segundoPlato:{1:{"huevos estrellados": 2.5},
                2:{"huevos revueltos": 3.0},
                3:{"yogurt y granola": 4.0}},
  bebida:{1:{"cafe": 2.5},
          2:{"leche": 3.0},
          3:{"cafe con leche": 4.0},
          4:{"zumo de fruta": 1.5}}
  
};


let menuAlmuerzo = {
  primerPlato:{ 1:{"Pisto a la bilbaína con bacalao desmigado": 8},
                2:{"Ensalada cesar con aliño casero, pollo asado y picatostes": 6.0},
                3:{"Ensalada de atun, tomate y huevo con rucula": 7.0},},
  segundoPlato:{1:{"Lomo de lubina a la brasa con cous-cous especiado": 9.5},
                2:{"Chuletas de pavo al ajillo con patatas fritas": 9.0},
                3:{"Camarones al curry con arroz y verduras": 11.0}},
  postre:{1:{"Brocheta de piña con crema de coco": 3.5},
          2:{"Bizcocho con salsa tibia de chocolate": 3.0},
          3:{"Pastel de zanahoria y nueces": 4.0},
          }
  
};

let menuCena = {
  primerPlato:{ 1:{"Crema de calabaza": 8},
                2:{"Ensalada cesar con aliño casero, pollo asado y picatostes": 7.0},
                3:{"Menestra de verduras": 7.0},},
  segundoPlato:{1:{"Pasta con alcachofa": 9.5},
                2:{"Merluza al horno": 9.0},
                3:{"Pollo al horno con arroz blanco": 11.0}},
  postre:{1:{"Fruta del tiempo": 3.5},
          2:{"Macedonia con ron": 3.0},
          3:{"Yogurt natural, miel y nueces": 4.0},
          }
}


let opciones_cliente = []


let horaStr = prompt("Bienvenido/a! Por favor escriba una hora con formato hh (1-24) sin minutos", "13");

try {
  let hora = parseInt(horaStr);
  if (isNaN(hora)) throw new Error();

  let menuSeleccionado;
  if (hora > 6 && hora < 11) {
    menuSeleccionado = menuDesayuno;
    console.log("Es desayuno");
  } else if (hora > 11 && hora < 15) {
    menuSeleccionado = menuAlmuerzo;
    console.log("Es almuerzo");
  } else if (hora > 18 && hora < 23) {
    menuSeleccionado = menuCena;
    console.log("Es cena");
  }

  if (menuSeleccionado) {
    console.log("El menú actual es:", menuSeleccionado);
    console.log("Opciones de primer plato son:", menuSeleccionado.primerPlato);
    console.log("Primera opcion:", menuSeleccionado.primerPlato[1]);
  } else {
    console.log("Escribe otra hora, que la cocina está cerrada");
  }
} catch {
  alert("Problema con la hora escrita. Debes introducir un número entero (1-24).");
}

  

  



