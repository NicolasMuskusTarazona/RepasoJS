// 🔹 Ejercicio:

// Usa map() para convertir un array de nombres en mayúsculas.

// Usa filter() para obtener números mayores a 50 de un array.

// Usa reduce() para sumar un array de números.

let nombres = ["Nicolas","Carlos","Diego"]

let mayusculas = nombres.map((a) =>  a.toUpperCase())

console.log(mayusculas)

let numeros = [10,20,30,40,50,60,70,80,90,100]

let numerosMayores = numeros.filter((b) => b > 50)

console.log(numerosMayores)

let sumar = numeros.reduce((acumulador,valorActual)=>
    acumulador + valorActual, 0
)

console.log(sumar)