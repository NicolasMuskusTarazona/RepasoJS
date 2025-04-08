// 🔹 Ejercicio:

// Crea una función que devuelva una promesa que se resuelva en 3 segundos.

// Usa async/await para esperar la promesa antes de continuar.
const work = true

let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(work){(resolve("Funciona"))}
        else{(reject("No funciona"))}
    },3000);
})

try {
    let rest = await Promise.all([promesa1])
    console.log("Todas las promesas resueltas", rest)
} catch (error) {
    console.log(error)
}