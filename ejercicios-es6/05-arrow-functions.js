// 5. Arrow Functions

// a) Convertir función tradicional a arrow
const saludar = nombre => "Hola, " + nombre + "!";
console.log(saludar("Ariel"));

// b) Cuadrado de un número
const cuadrado = n => n * n;
console.log("El cuadrado de 9 es:", cuadrado(9));

// c) El mayor de dos números
const elMayor = (a, b) => (a > b ? a : b);
console.log("Entre 50 y 20, el mayor es:", elMayor(50, 20));

// d) Array al cuadrado usando map() y mínima cantidad de código
const numeros = [1, 2, 3, 4, 5];
const resultados = numeros.map(n => n ** 2);
console.log("Lista original:", numeros);
console.log("Lista al cuadrado:", resultados);