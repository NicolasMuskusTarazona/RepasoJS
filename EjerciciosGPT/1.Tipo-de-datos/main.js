// 🔹 Ejercicio:

// Declara variables con cada tipo de dato primitivo y muéstralas en consola.

// Crea un objeto persona con propiedades nombre, edad, y un array hobbies.

let string = "Hola"
let number = 17
let boolean1 = true 
let boolean2 = false 
let nulo = null
let indefinido = undefined

console.log(typeof(string))
console.log(typeof(number))
console.log(typeof(boolean1))
console.log(typeof(boolean2))
console.log(typeof(nulo)) // eror JS 
console.log(typeof(indefinido))

let persona ={
    nombre: "Nicolas",
    edad: 17,
    hobbies: [
        "Programar",
        "Estudiar",
        "Jugar",
        "Aprender"
    ]
}

console.log(persona)

let persona2 ={
    nombre: "Danilo",
    edad: 17,
    hobbies: [
        "Programar",
        "Jugar" 
    ]
}

console.log(persona2.nombre)
console.log(persona2.edad)