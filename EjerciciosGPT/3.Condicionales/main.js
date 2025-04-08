// 🔹 Ejercicio:

// Crea un programa que pida la edad con prompt y muestre si es menor, adolescente o mayor de edad.

// Usa switch(true) para clasificar edades.

let edad = Number(prompt("Ingrese un numero: "))
if(isNaN(edad) || edad >120 || edad <=0 ){
    console.log("Ingrese su edad correspondiente")
}else if(edad < 12){
    console.log("Eres menor")
}else if(edad <= 17){
    console.log("Adolescente")
}else{
    console.log("Mayor de edad")
}