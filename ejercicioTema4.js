//Comparar numeros
function compararNumero(numero) {
    if (numero == 0) {
        console.log("El numero es 0");
    } else if (numero > 0) {
        console.log("El numero es positivo");
    } else {
        console.log("El numero es negativo");
    }
}

// Ciclo while

var numeroWhile = 0;

while (numeroWhile < 3) {
    numeroWhile++
    console.log(numeroWhile)
}

//Ciclo do while

var resultado = ""
var numeroDoWhile = 2
do {
    numeroDoWhile++
    resultado = resultado + numeroDoWhile
} while (numeroDoWhile < 3)
console.log(resultado)

//Ciclo for

for (let numeroFor = 0; numeroFor < 3; numeroFor++) {
    console.log(numeroFor)
}

//Switch

var estacion = "verano"
switch (estacion) {
    case "verano":
        console.log("Verano");
        break;
    case otoño:
        console.log("Otoño");
        break;
    case invierno:
        console.log("Invierno");
        break;
    case primavera:
        console.log("Primavera");
        break;
    default:
        console.log("No es una estación del año")
}