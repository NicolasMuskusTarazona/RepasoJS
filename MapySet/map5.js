const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Sofía", edad: 20 }
];

let nombresPersonas = personas.map(nom => nom.nombre)

console.log(nombresPersonas)