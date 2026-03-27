// 7. Spread Operator

// a) Suma de argumentos indefinidos (usando rest/spread)
const sumarTodo = (...numeros) => numeros.reduce((a, b) => a + b, 0);
console.log("A) Suma de argumentos:", sumarTodo(1, 2, 3, 4, 5));

// b) Encontrar el número máximo en un array
const valores = [10, 50, 5, 100, 2];
console.log("B) El número máximo es:", Math.max(...valores));

// c) Combinar dos objetos en uno solo
const base = { nombre: "Ariel", ciudad: "Bs As" };
const extra = { profesion: "Dev", edad: 25 };
const usuarioCompleto = { ...base, ...extra };
console.log("C) Objeto combinado:", usuarioCompleto);

// d) Aplanar un array con subarrays (tip: usando flat)
const desordenado = [1, [2, 3], [4]];
const plano = [].concat(...desordenado); //  spread + concat
console.log("D) Array aplanado:", plano);