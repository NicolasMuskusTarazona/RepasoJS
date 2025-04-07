const estudiantes = [
    {nombre: "Julian", calificacion: 30},
    {nombre: "Danilo", calificacion: 95},
    {nombre: "Carlos", calificacion: 78},
    {nombre: "Danna", calificacion: 82},
    {nombre: "Nicolas", calificacion: 100},
    {nombre: "Pepe", calificacion: 58}
]
let [a,b,c,d,e,f] = estudiantes

// Clasificación de estudiantes

for ( const puntaje of estudiantes){
    if (puntaje.calificacion >= 90) {
        console.log(`${puntaje.nombre}: Excelente`)
    }else if(puntaje.calificacion >=80){
        console.log(`${puntaje.nombre}: Bueno`)
    }else if(puntaje.calificacion >=70){
        console.log(`${puntaje.nombre}: Regular`)
    }else{
        console.log(`${puntaje.nombre} Reprobado`)
    }
}

// Filtrar aprobados

let losAprobados = estudiantes.filter((Aprobados)=> Aprobados.calificacion >= 70) 
console.table(losAprobados)

// Calcular promedio

let promedio = estudiantes.reduce((acumulador, valorActual)=>{  
    return (acumulador + valorActual.calificacion)
},0) / estudiantes.length
console.log(`Promedio: ${Math.trunc(promedio)}`)

// Mostrar propiedades del primer estudiante

console.warn("Propiedades del primer estudiante")
console.log(`nombre: ${a.nombre}`)
console.log(`calificacion: ${a.calificacion}`)

// Uso de break y continue

for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    if (estudiante.calificacion === 70) {
        continue
    }
    if (estudiante.calificacion < 60) {
        console.warn("Se detuvo el proceso porque un estudiante reprobó con menos de 60.");
        break;
    }    
    console.log("Estudiante procesado:", estudiante.nombre); 
}
