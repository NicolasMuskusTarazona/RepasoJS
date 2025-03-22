// Has hecho una compra y sabes el precio del producto y su iva. 
// Haz un script que te calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

let precio = Number(prompt("Precio del producto:", 200))
if (isNaN(precio)){
    console.log("Escribe un numero.")
}else{
    let iva = 21
    let preciototal = precio + iva*precio/100
    console.log(`El precio total es de: ${preciototal}€`)
}