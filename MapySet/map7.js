const fechas = ["2025-03-30", "2024-12-25", "2023-07-19"];

let fechareversas = fechas.map(rev => rev.split("-").reverse().join("/"))

console.log(fechareversas)