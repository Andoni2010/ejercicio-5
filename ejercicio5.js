// variable que contenga tu altura en centímetros (entero)
let altura = 1.78;
console.log(altura.toPrecision(1));
// variable que contenga tu altura en metros (número de coma flotante)
console.log(altura.toFixed(1));
// variable que contenga tu peso en kilogramos (número de coma flotante)
let kg = 70;
console.log((kg).toFixed(2))
// variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.round(altura));
// variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(altura));
// variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_value_js = Number.MAX_VALUE;
console.log(max_value_js + 1 === max_value_js)
