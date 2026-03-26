// === Ejercicio 2: Arrays (Listas) ===//

// a) Frutas: agregar al principio y al final
let misFrutas = ["Manzana", "Pera", "Banana", "Naranja", "Uva"];

misFrutas.unshift("Frutilla"); // unshift: lo pone PRIMERO en la lista
misFrutas.push("Mango");      // push: lo pone ÚLTIMO en la lista

console.log("A) Lista de frutas completa:", misFrutas);


// b) Números: crear una lista con el doble de cada uno
const numerosBase = [1, 2, 3, 4, 5];
let listaDobles = [];

for (let i = 0; i < numerosBase.length; i++) {
    listaDobles.push(numerosBase[i] * 2); // Vamos metiendo los resultados al final
}
console.log("B) El doble de los números es:", listaDobles);


// c) Combinar dos listas de colores (unirlas)
const lista1 = ["Rojo", "Verde", "Azul"];
const lista2 = ["Amarillo", "Negro"];
const coloresUnidos = lista1.concat(lista2); // concat: pega las dos listas en una nueva

console.log("C) Todos los colores juntos:", coloresUnidos);


// d) Quitar el primero y el último SIN romper la lista original
const valoresOriginales = [10, 20, 30, 40, 50, 60];

// Paso 1: Hacemos una COPIA para no arruinar la original
const miCopia = [...valoresOriginales]; 

// Paso 2: Usamos shift y pop en la COPIA
miCopia.shift(); // shift: saca el primero (el 10)
miCopia.pop();   // pop: saca el último (el 60)

console.log("D) Lista original (sigue con 10 y 60):", valoresOriginales);
console.log("D) Copia recortada (sin 10 ni 60):", miCopia);