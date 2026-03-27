// 8. Destructuring

// a) Extraer nombre y edad de un objeto
const persona = { nombre: "Ariel", edad: 25, ciudad: "Buenos Aires" };
const { nombre, edad } = persona;
console.log(`A) Nombre: ${nombre}, Edad: ${edad}`);

// b) Destructuring en una función (argumentos)
const mostrarInfo = ({ nombre, ciudad }) => {
    console.log(`B) ${nombre} vive en ${ciudad}`);
};
mostrarInfo(persona);

// c) Destructuring de un array (Ciudad, País, Población)
const infoCiudad = ["Barcelona", "España", 1600000];
const [ciudad, pais, poblacion] = infoCiudad;
console.log(`C) Ciudad: ${ciudad}, País: ${pais}, Población: ${poblacion}`);