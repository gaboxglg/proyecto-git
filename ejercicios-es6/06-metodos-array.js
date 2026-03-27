// 6. Métodos de array

// a) filter() para números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(n => n % 2 === 0);
console.log("A) Números pares:", pares);

// b) map() para nombres y edades de estudiantes
const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 9 },
    { nombre: "Pedro", edad: 28, calificacion: 7 },
    { nombre: "Santi", edad: 22, calificacion: 10 }
];
const nombresYEdades = estudiantes.map(e => ({ nombre: e.nombre, edad: e.edad }));
console.log("B) Lista de estudiantes (resumen):", nombresYEdades);

// c) find() para la primera persona mayor de 25 años
const mayorDe25 = estudiantes.find(e => e.edad > 25);
console.log("C) Primera persona mayor de 25:", mayorDe25);

// d) reduce() para calcular la suma de todos los números
const sumaTotal = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log("D) Suma total de los números:", sumaTotal);