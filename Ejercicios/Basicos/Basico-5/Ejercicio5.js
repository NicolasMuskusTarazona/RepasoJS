let litros = Number(prompt("Litros consumidos por su coche: "))
let kilometros = Number(prompt("Kilometros recorridos: "))
if (isNaN(litros) || isNaN(kilometros)){
    console.log("Ingrese un numero.")
}
else{
    let combustibleConsumido = litros/kilometros
    alert(`Has consumido ${combustibleConsumido.toFixed(2)}l/km // ${litros}/${kilometros}`)
}