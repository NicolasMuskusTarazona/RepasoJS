let lado = Number(prompt("Lado del cuadrado: ",40))
if (isNaN(lado)){
    console.log("Escribe un numero.")
}
else{
    let area = lado * lado
    let perimetro = lado + lado + lado + lado
    console.log(`El lado del cuadrado es de : ${lado}`)
    console.log(`El area del cuadrado es de : ${area}`)
    console.log(`El perimetro del cuadrado es de: ${perimetro}`)
}