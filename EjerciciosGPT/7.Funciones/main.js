// 🔹 Ejercicio:

// Crea una función que reciba dos números y devuelva su suma.

// Crea una función de flecha que reciba un array de números y devuelva el mayor

function suma(num1, num2) {
    return num1 + num2
}
console.log(suma(1,2))

let numeros = [1,2,3,4,5]

let mayor = Math.max(...numeros)

console.log(mayor)