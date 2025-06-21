/**/

let edad = 18;
let esVIP = true;
/*
if(edad > 17) {
  console.log("Se permite el ingreso al evento.");
  
  if(esVIP) {
    console.log("Se permite el ingreso al VIP");
  } else {
    console.log("No se permite el ingreso al VIP");
  }
} else {
  console.log("No se permite el ingreso a menores");
}

//Este código no es válido
if(edad > 17 && esVIP) {
  console.log("Accede al evento y a la sección VIP");
} else {
  console.log("No puede acceder");
}

//
if(edad > 17) {
  console.log("Accede al evento");
  if (esVIP) {
    console.log("Tiene acceso al VIP");
  }
} else {
  console.log("No tiene acceso al evento.");
}


if(edad < 18) {
  console.log("No puede ingresar al evento");
} else if (esVIP) {
  console.log("Ingresa al evento y al VIP");
} else {
  console.log("Ingresa al evento")
}
*/

if(edad > 17 && esVIP) {
  console.log("Ingresa al evento y al VIP");
} else if(edad > 17) {
  console.log("Ingresa al evento");
} else {
  console.log("No puede ingresar al evento.")
}






