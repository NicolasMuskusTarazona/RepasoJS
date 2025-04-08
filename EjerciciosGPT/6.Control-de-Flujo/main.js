// 🔹 Ejercicio:

// Crea un for que imprima números del 1 al 10, pero use continue para saltar el 5.

// Crea otro for que detenga la ejecución si encuentra un número mayor a 7.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Salta la impresión del número 5
    }
    if (i > 7) {
        break; // Detiene el bucle si i es mayor que 7
    }
    console.log(i);
}
