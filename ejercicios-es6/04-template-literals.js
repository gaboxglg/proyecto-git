// 4. Template Literals

// a) Variables de información personal
const nombre = "Ariel";
const edad = 25;
const profesion = "Desarrollador";
console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y soy ${profesion}.`);

// b) Función con cálculos de precio y cantidad
const calcularTotal = (precio, cantidad) => `El total es: ${precio * cantidad}`;
console.log(calcularTotal(500, 3));

// c) Mensaje de error
const nombreError = "Error de Conexión";
const descError = "No se pudo establecer el vínculo con el servidor.";
console.log(`[ALERTA] ${nombreError}: ${descError}`);