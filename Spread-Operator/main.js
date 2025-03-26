const suma = (a, b) => {
    return c = a + b
}

//console.log(suma(4,2)) --> 6

let arreglo = [4,2]
//console.log(suma.apply(null, arreglo)) --> 6

console.log(suma(...arreglo)) // --> 6

// Arrays

const dias1 = ["lunes", "martes", "miercoles"]
const dias2 = ["jueves", "viernes"]


console.log(dias1.concat(dias2))

// sirve tambien para concatenar

const pasatiempos1 = ["jugar", "programar","estudiar"]
const pasatiempos2 = [...pasatiempos1,"enseñar", "dormir"]

console.log(pasatiempos2)

// Objetos

const nombreCelular = {
    modelo : "Iphone 13 PRO Max"
}

const marcaCelular = {
    marca : "Apple"
}

const infoCelular ={
    ...nombreCelular,
    ...marcaCelular
}

console.log(infoCelular)