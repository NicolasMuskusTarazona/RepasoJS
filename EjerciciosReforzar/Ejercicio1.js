// 🔹 Ejercicio 1: Manipulación de Arrays
// Usa map() para crear un nuevo array donde cada número se multiplique por 2.

// Usa filter() para obtener solo los números mayores a 25.

// Usa reduce() para obtener la suma de todos los números del array.

// Array
const numeros = [10, 20, 30, 40, 50, 60];

console.log(numeros)

// Numeros multiplicados

let multiplicados = numeros.map((x)=> x*2)

console.log(multiplicados)

// Numeros mayores a 25

let mayores = numeros.filter((b)=> b > 25)

console.log(mayores)

// Suma de todos los numeros

let suma = numeros.reduce((acumulador,valorActual)=> acumulador + valorActual,0)

console.log(suma)