const precios = [100, 200, 300, 400];

let porcentaje = precios.map(iva => {
    return iva + iva * 0.15
})

console.log(porcentaje)