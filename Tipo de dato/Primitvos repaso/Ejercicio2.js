// 2. Operaciones con tipos de datos
// 🔹 Problema: ¿Qué imprimirá cada línea?

// 0 / 6 
console.log("10" + 5);// Error
console.log("10" - 5);// Error
console.log(true + 1);// Error
console.log(false + 1);// Error
console.log(null + 1);// Error
console.log(undefined + 1); // Undefined

// Solucion

console.log("10" + 5);   // "105"
console.log("10" - 5);   // 5
console.log(true + 1);   // 2
console.log(false + 1);  // 1
console.log(null + 1);   // 1
console.log(undefined + 1); // NaN
