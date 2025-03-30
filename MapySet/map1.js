const precio_sinImpuesto = [200, 500, 80, 90, 5]

const precio_comImpuesto = precio_sinImpuesto.map((precio) => {
	return precio + precio * 0.75
})

console.log(precio_comImpuesto)