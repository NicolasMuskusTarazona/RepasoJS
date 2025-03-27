const array_numeros = [10,20,30,40,50]
let user = Number(prompt("Ingresa un numero del 1-4: ")) 
console.log(
    (isNaN(user) || user < 0 || user >= array_numeros.length )
    ?"Ingresa un numero correcto"
    :`Ganaste ${array_numeros[user]} $`
)