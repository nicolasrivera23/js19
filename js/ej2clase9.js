/* Extraemos los datos de un formulario y los almacenamos en las variables */

let nombre = "Julián Alvarez";
let edad = "19";

console.log("Bienvenida/o " + nombre + " al sistema");
console.log("Tu edad es de " + edad + " años");

console.log("La edad es un no númerico : " + isNaN(edad) );

console.log("Tipo de la variable edad : " + typeof edad);


let edadNumber = parseInt(edad);
console.log("Tipo de la variable edadNumber : " + typeof edadNumber);

if(edadNumber >= 18) {
  console.log("La persona es mayor de edad.");
} else {
  console.log("La persona es menor de edad.")
}









