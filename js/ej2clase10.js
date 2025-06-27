//Paso 1
//declaramos un array de objetos
// con los atributos nombre, precio y descuento

let productos = [
  { nombre: 'Smartwach', precio: 33, descuento: true },
  { nombre: 'Laptop', precio: 44, descuento: false},
  { nombre: 'Celular', precio: 55, descuento: true},
  { nombre: 'Tablet', precio: 66, descuento: true}
];

// Paso 2 
// Crear un bucle para iterar elemento por elemento de la lista.

console.log("Cantidad total de productos : " + productos.length);

/*
for(let i = 0; i < productos.length; i++ ) {
  console.log(productos[i]);
}
*/

// 1. Mostrar todos los productos con descuento.
// 2. Mostrar el total de productos sin descuento.
// 3. Al final, mostrar cuántos productos tienen descuento y cuántos no.
// 4. Mostrar el valor total de los productos con descuento
// 5. Manipular el DOM para crear un div que contenga un mensaje con el total de elementos con descuento.

// 1
for(let i = 0; i < productos.length; i++ ) {
  if(productos[i].descuento) {
    console.log("Este Producto Tiene descuento : " + productos[i].nombre);
  }
}

// 2
for(let i = 0; i < productos.length; i++ ) {
  if(!productos[i].descuento) {
    console.log("Este producto no tiene descuento : " + productos[i].nombre);
  }
}

// 3
let cantProdConDesc = 0;
for(let i = 0; i < productos.length; i++ ) {
  if(productos[i].descuento) {
    cantProdConDesc++;
  }
}
alert("Cantidad de productos con descuento : " + cantProdConDesc);

//Cuestionario
console.log(2 + '3');
let x = 5; let y = "5"; console.log(x == y);

//función sin parámetros
function mostrarSaludo() {
  console.log("Hola que tal!");
}

//función con parámetros
function mostrarSaludoDos(nombre) {
  console.log("Hola " + nombre);
}
//invocamos la función y le agregamos los parametros/argumentos
mostrarSaludoDos("Nico");


