// === Ejercicio 3: Objetos ===

// a) Crear un objeto libro y mostrar sus partes
const miLibro = {
    titulo: "El Aleph",
    autor: "Jorge Luis Borges",
    anio: 1949
};

console.log("A) Título del libro:", miLibro.titulo);
console.log("A) Autor:", miLibro.autor);
console.log("A) Año de publicación:", miLibro.anio);


// b) Objeto persona: agregar un hobby y cambiar la edad
const usuario = {
    nombre: "Ariel",
    edad: 24
};

// Agregamos una propiedad que no existía
usuario.pasatiempo = "Programar"; 

// Cambiamos una que ya estaba
usuario.edad = 25; 

console.log("B) Datos del usuario actualizados:", usuario);


// c) Objeto calculadora con funciones (métodos)
const calculadoraSimple = {
    sumar: (num1, num2) => num1 + num2,
    restar: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 / num2
};

console.log("C) Probando suma (20 + 10):", calculadoraSimple.sumar(20, 10));
console.log("C) Probando multiplicación (5 x 4):", calculadoraSimple.multiplicar(5, 4));


// d) Acceder a una propiedad usando una variable (Corchetes)
const queDatoBusco = "nombre";
console.log("D) Acceso dinámico al nombre:", usuario[queDatoBusco]); 
// Nota: Usar usuario[variable] es clave cuando no sabés de antemano qué propiedad vas a pedir.