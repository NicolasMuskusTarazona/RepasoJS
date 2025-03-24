let numero1 = Number(prompt("Primer numero: "))
let numero2 = Number(prompt("Segundo numero: "))
let numero3 = Number(prompt("Tercer numero: "))

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log("Ingrese un numero.")
}
else{
    let media = (numero1+numero2+numero3)/3
    console.log(`La media de los numero es de: ${media.toFixed(0)}.`)
}