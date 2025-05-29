// Code tested using codepen.io
// usando de referencia menu: https://codebilbao.es/wp-content/uploads/2021/06/180621.pdf
// cena: https://web.ua.es/es/universidad-saludable/documentos/menus-saludables.pdf

/* 
Tareas-seudocodigo:

1. Pedir usuario hora.ok
2. Con la hora se selecciona el menu correspondiente.ok
3. Mostrar opciones de primer plato.ok
4. Pedir al usuario escribir la seleccion la opcion del primer plato
5. Con el input, verificar y match de seleccion
6. Guardar la seleccion en una lista (junto con el nombre del plato y precio)
7. Mostrar la lista de opciones seleccionadas
8. Mostrar el precio total de la cuenta

Problemas-Aprendizaje:
1. Usar parseInt para convertir string a entero no genera error si el string no es un numero, genera NAN y hay que crear el error.
2. Console.log acepta varios elementos pero no es el caso de Alert  que no acepta varios elementos.
3. En un objeto dentro de un objeto, el valor de una clave que es un objeto se puede acceder con su respectiva clave de manera anidada.
4. Usar Object.keys(obj) devuelve un array con las claves del objeto.
5. Usar Object.keys(obj)[0] para acceder al primer elemento de lista de claves.

// */


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


let opcionesCliente = []


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
    //console.log("Opciones de primer plato son:", menuSeleccionado.primerPlato);
    //console.log("Primera opcion:", menuSeleccionado.primerPlato[1]);

    for (let plato in menuSeleccionado) {
      //console.log("Plato:", plato);
      let opcionesPlato = menuSeleccionado[plato]; // da objeto de primerPlato, segundoPlato o postre
      let lineas = [];

      for (let id in opcionesPlato) {
        let item = opcionesPlato[id];                    // valor de primera key (1) { "tostadas": 2.5 }
        let nombre = Object.keys(item)[0];             // nos da primera key : "tostadas"
        let precio = item[nombre];                     // usando nombre como key para sacar el valor que es el precio:2.5
        lineas.push(`${id} : ${nombre} / ${precio}€`); // "1 / tostadas / 2.5€"
      }

      //mensaje de opciones de plato
      let mensaje = `Opciones de ${plato}:\n` + lineas.join("\n");
      alert(mensaje);

      //pedir al usuario seleccionar una opcion
      let seleccionStr = prompt(
        `Escribe el numero de opcion que prefieres ${plato} (${Object.keys(opcionesPlato)})`,
        Object.keys(opcionesPlato)[0]
      );
      let selNum = parseInt(seleccionStr);
    
      // Guardar seleccion en array
      opcionesCliente.push({ plato, selNum });
    
      console.log(`Seleccio hecha para ${plato} es ${selNum}`);
      console.log("Opciones del cliente:", opcionesCliente); // array de objectos

      
  
    }
  }
  
  
  else {
    console.log("Escribe otra hora, que la cocina está cerrada");
  }
} catch {
  alert("Problema con la hora escrita. Debes introducir un número entero (1-24).");
}

  

  



