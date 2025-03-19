// Primitivos 
// Se pasan por valores
// Inmutables / Comparables

// 1. String

let miString= ("Hola soy un string")
console.log(miString)
console.log(typeof miString)
// typeof para saber que tipo de dato es algo

// 2. Booleanos
// True o False

let miBooleano1 = true
let miBooleano2 = false

console.log(typeof miBooleano1)
console.log(typeof miBooleano2)

console.log(miBooleano1)
console.log(miBooleano2)

// 3. Number

let miNumero = 15
console.log(typeof miNumero)
console.log(miNumero)

// 4. Symbol
// Funcion que genera un tipo de dato 
// primitivo
// sirven para parametros unicos

const miSimbolo1 = Symbol(1)
const miSimbolo2 = Symbol(1)

console.log(typeof miSimbolo1)
console.log(typeof miSimbolo2)

console.log(miSimbolo1 === miSimbolo2)

// 5. UNDEFINED

let miUndefined
console.log(typeof miUndefined)

// null Esta definido ( Representa que esta vacio )

// UNDIFINED ( Es como si nunca le guarde un valor
// o nunca la defini ) 