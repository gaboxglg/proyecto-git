

// === Ejercicio 1: let y const ===

// a) Declarar y cambiar valores
let miEdad = 25; 
const miNombre = "Ariel";

miEdad = 26; // Esto se puede porque let es flexible
// miNombre = "Juan"; // Si saco el comentario, da ERROR porque const es fija

console.log("Punto A - Mi edad es:", miEdad, "y mi nombre es:", miNombre);


// b) El bucle (for)
console.log("Punto B - Contando:");
for (let numero = 1; numero <= 3; numero++) {
    console.log("Vuelta:", numero);
}
// Si acá pusiera 'const numero', el programa se rompe porque no puede sumar de a uno.


// c) El objeto que es constante
const misDatos = {
    ciudad: "Buenos Aires",
    materia: "Programación"
};

misDatos.ciudad = "Rosario"; // Esto SÍ funciona aunque sea const
// Explicación: El objeto no puede ser otra cosa, pero lo de adentro sí puede cambiar.

console.log("Punto C - Datos nuevos:", misDatos);


// d) El experimento de las llaves (Scope/Alcance)
{
    var nombreVar = "Soy VAR y me ven desde afuera";
    let nombreLet = "Soy LET y solo vivo adentro de las llaves";
    const nombreConst = "Soy CONST y también me quedo adentro";
}

console.log("Punto D - Probando el alcance:");
console.log(nombreVar); // Este se muestra bien
// console.log(nombreLet);   // Tira ERROR: no existe afuera
// console.log(nombreConst); // Tira ERROR: no existe afuera
// Explicación: let y const respetan el bloque de las llaves, var no.