let hora =Number(prompt("Hora: "))
let minutos = Number(prompt("Minutos: "))
if (isNaN(hora) || isNaN(minutos) || hora<0 || minutos< 0 || minutos >=60 ||hora >=24){
    alert("Ingrese un numero coherente")
}
else{
    let segundos = hora*60*60 + minutos*60
    alert(`Segundos: ${segundos.toFixed(0)} segundos.`)
}