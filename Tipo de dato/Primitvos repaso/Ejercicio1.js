// 1. Tipo de dato y typeof

let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
let direccion;
let valorNulo = null;
let identificador = Symbol("id");

console.log(typeof nombre);  // string
console.log(typeof edad); // number
console.log(typeof esEstudiante); // booleano
console.log(typeof direccion); // Undifined
console.log(typeof valorNulo); // object (Error en JS)
// null valor primitivo que representa
// su ausencia
console.log(typeof identificador); // symbol
