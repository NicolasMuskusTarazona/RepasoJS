Instrucciones
Crear un array de estudiantes, donde cada estudiante sea un objeto con:

nombre (string)

calificacion (número entre 0 y 100)


const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 92 },
    { nombre: "Carlos", calificacion: 78 },
    { nombre: "María", calificacion: 65 },
    { nombre: "Jorge", calificacion: 90 }
];
Recorrer el array y clasificar las calificaciones usando for y if else:

Mayor o igual a 90 → "Excelente"

Entre 80 y 89 → "Bueno"

Entre 70 y 79 → "Regular"

Menos de 70 → "Reprobado"

📌 TIP: Guarda los resultados en un nuevo array con map().

Filtrar a los estudiantes aprobados (calificación mayor o igual a 70) con filter().

Calcular el promedio de todas las calificaciones usando reduce().

Usar un for...in para imprimir las propiedades del primer estudiante.

Usar break y continue en un for:

Si encuentras un estudiante con calificación menor a 60, usa break para detener el ciclo.

Usa continue para omitir a los estudiantes con calificación exactamente de 70.

