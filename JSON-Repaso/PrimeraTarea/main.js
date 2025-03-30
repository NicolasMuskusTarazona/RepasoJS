// Array
// 1.

let estudiantes = [
    { id: 1, nombre: "Nicolas", edad: 17, notas: [90, 85, 88], activo: true },
    { id: 2, nombre: "Danilo", edad: 18, notas: [75, 80, 72], activo: false },
    { id: 3, nombre: "Carlos", edad: 19, notas: [95, 92, 98], activo: true }
];

// Convierte el array en JSON
const estudiantesJSON = JSON.stringify (estudiantes) 

// Convierte el JSON editable
const estudiantesAjustes = JSON.parse (estudiantesJSON)


// 2.
let nuevaID;
do {
    nuevaID = prompt("ID: ");
    // Verifica si es un numero válido
    if (isNaN(nuevaID)) {
        alert("Por favor, ingrese un número válido.");
        continue; // Repite el ciclo sin evaluar si el ID ya existe
    }
    nuevaID = Number(nuevaID); // Convierte a numero
    // Verifica el ID
    if (estudiantes.some(existeID => existeID.id === nuevaID)) {
        alert("Ese ID ya está en uso. Ingrese otro.");
    }
} while (isNaN(nuevaID) || estudiantes.some(existeID => existeID.id === nuevaID));


let nuevoNombre = prompt("Nombre: ")

let nuevaEdad;
do {
    nuevaEdad = Number(prompt("Ingrese la edad: "));
    if (isNaN(nuevaEdad)) {
        alert("Error: Debe ingresar un número válido.");
    }
} while (isNaN(nuevaEdad));


let nuevaNotas = prompt("Ingrese las notas separadas por comas ',' ")
.split(",")
.map(Number)

let nuevoActivo = confirm ("¿ El estudiante esta activo ? ( Aceptar = Si ), ( Cancelar = No ) ")
console.log(estudiantes)

let nuevoEstudiante ={
    id: nuevaID, nombre: nuevoNombre, edad: nuevaEdad, notas: nuevaNotas, activo: nuevoActivo
}

estudiantes.push(nuevoEstudiante)

console.log("Estudiante agregado", nuevoEstudiante)

console.log("Lista de estudiantes actualizada", estudiantes)