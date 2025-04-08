// Ejercicio:

// Imprime los números del 1 al 10 con for.

// Usa for...in para recorrer un objeto y for...of para un array.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let personas = {
    nombre: "Nicolas",
    edad: 17,
    vivo: true
}

for (const p in personas) {
    console.log(p)
}

let numeros = [1,2,3,4,5]

for (const n of numeros) {
    console.log(n)
}

let personasArray = [
    { nombre: "Nicolas", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 19 }
];
const [a,b,c] = personasArray

// console.log(a)
// console.log(b)
// console.log(c)

for (const w of personasArray) {
    console.log(w)
}