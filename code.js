// Code tested using codepen.io
// usando de referencia menu: https://codebilbao.es/wp-content/uploads/2021/06/180621.pdf
// cena: https://web.ua.es/es/universidad-saludable/documentos/menus-saludables.pdf

/* 
Tareas-seudocodigo:

1. Pedir usuario hora.ok
2. Con la hora se selecciona el menu correspondiente.ok
3. Mostrar opciones de primer plato.ok
4. Pedir al usuario escribir la seleccion la opcion del primer plato.ok
5. Con el input, verificar y match de seleccion.ok
6. Guardar la seleccion en una lista (junto con el nombre del plato y precio).ok
7. Mostrar la lista de opciones seleccionadas.ok
8. Mostrar el precio total de la cuenta.ok
9. Agregar mensaje despues de cada seleccion que venga de un array de mensajes que se escogen aleatoriamente.ok
10. Opcional ofrecer extras (entrantes, helados) al final del menu.

Problemas-Aprendizaje:
1. Usar parseInt para convertir string a entero no genera error si el string no es un numero, genera NAN y hay que crear el error.
2. Console.log acepta varios elementos pero no es el caso de Alert  que no acepta varios elementos.
3. En un objeto dentro de un objeto, el valor de una clave que es un objeto se puede acceder con su respectiva clave de manera anidada.
4. Usar Object.keys(obj) devuelve un array con las claves del objeto.
5. Usar Object.keys(obj)[0] para acceder al primer elemento de lista de claves.
6. do...while usar para comprobar que el usuario escribe los datos correctos.
7. usar "includes" para comparar si un valor está en un array. Seria como usar isin en python.
8. Usar "map" para extraer de cada elemento (objeto en nuestro caso) de un array y crea nuevo array con resultado
9. Usar "reduce" para sumar todos los precios de un array de objetos. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
10. Usar "toFixed(2)" para mostrar el total con dos decimales.

// */


let mensajeSeleccionPlato = [
  "Excelente elección, ¡un plato delicioso!",
  "¡Buen gusto! Este plato es uno de nuestros favoritos.",
  "¡Has hecho una gran selección! Esperamos que lo disfrutes.",
  "¡Muy bien! Este plato es muy popular entre nuestros clientes.",
  "¡Perfecto! Seguro que te encantará este plato.",
  "Me encanta ese plato, es rico y muy nutritivo."
];

// definimos funcion que aleatoriamente devuelve un mensaje de la lista
function mensajeAleatorio() {
  const index = Math.floor(Math.random() * mensajeSeleccionPlato.length);
  //console.log("Mensaje aleatorio seleccionado:", index, mensajeSeleccionPlato[index]);
  return mensajeSeleccionPlato[index];
}


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

let menuExtras = {
  entrantes:{   1:{"Boquerones": 8},
                2:{"Calamares en su tinta": 7.0},
                3:{"Patatas bravas": 7.0},},
  helados:{     1:{"Chocolate y pistacho": 9.5},
                2:{"Manzanas con Vainilla": 9.0},
                3:{"Almendra con galleta": 11.0}},
  
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

      //pedir al usuario seleccionar una opcion con validacion
      const clavesCorrectas = Object.keys(opcionesPlato); // ej. ["1","2","3"]
      let seleccionStr;
      do {

          seleccionStr = prompt(
          `Escribe el numero de opcion que prefieres ${plato} (${clavesCorrectas.join(", ")})`,
          clavesCorrectas[0]);
          
          if (!clavesCorrectas.includes(seleccionStr)) {
            alert("Error: Debes introducir un número entero (ejemplo: 1,2,3 o 4) segun opciones disponibles.");
            alert(mensaje); 
          }
        } while (!clavesCorrectas.includes(seleccionStr));

        
      let selNum = parseInt(seleccionStr);
      let selItem = opcionesPlato[selNum];
      let selNombre     = Object.keys(selItem)[0];
      let selPrecio     = selItem[selNombre];
        
      // Guardar seleccion en array
      opcionesCliente.push({ plato,
                             selNum,
                             nombre: selNombre,
                             precio: selPrecio });
      // mostrar mensaje aleatorio despues de cada seleccion
      alert(mensajeAleatorio());
    
      console.log(`Seleccion hecha para ${plato} es ${selNum} que es "${selNombre}" con precio ${selPrecio}€`);
      console.log("Opciones del cliente:", opcionesCliente); // array de objectos     
  
    }
    
        

    
    // mostrar opciones seleccionadas en mensaje de alert
    const resumenLineas = opcionesCliente.map(o =>
      `${o.plato} (id: ${o.selNum}): ${o.nombre} ---> ${o.precio}€`
    );

    // calcular el total
    const total = opcionesCliente.reduce((suma, o) => suma + o.precio, 0);
    alert(
      "Gracias por confiar en nosotros, aquí está su selección de menú:\n\n" +
      resumenLineas.join("\n\n") +
      `\n\nTotal a pagar: ${total.toFixed(2)}€`
    );


  }
  
  
  else {
    console.log("Escribe otra hora, que la cocina está cerrada");
  }
} catch {
  alert("Problema con la hora escrita. Debes introducir un número entero (1-24).");
}

  

  



