// 🔹 Ejercicio 2: Uso de break y continue

// Usa un for para recorrer el array y muestra solo las calificaciones aprobadas (mayores a 60).

// Si encuentras una calificación menor a 50, detén el ciclo con break.

// Si encuentras una calificación de 70, usa continue para saltarla y seguir con las siguientes.

const calificaciones = [100, 90, 85, 70, 55, 40, 95];

for (const element of calificaciones) {
    if (element === 70) {
        continue; // Salta esta iteración antes de imprimir cualquier cosa
    }
    if (element < 50) {
        break; // Si el número es menor a 50, detiene el ciclo
    }
    if (element > 60) {
        console.log(`Número filtrado mayor a 60: ${element}`);
    }
}
