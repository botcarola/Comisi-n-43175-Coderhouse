// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false

// let valorSemaforoActual = "amarillo"

// if ( valorSemaforoActual === "amarillo" || valorSemaforoActual === "rojo") {    
//     console.log(false)
// } else if ( valorSemaforoActual === "verde" ) {
//     console.log(true)
// } else {
//     console.log("error: color de semáforo inválido")
// }

// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false


// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es

// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

// 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.

let pasoTest = true;
let tieneMultasImpagas = false;
let pagoImpuestos = true;

if ( pasoTest === true && pagoImpuestos === true && tieneMultasImpagas === false ) {

    console.log(true)

} else {
    console.log(false)
}



// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// const numero = Number(prompt("Ingrese un número"))

// if ( numero % 2 === 0 ) {
//     console.log("Es par")
// } else {
//     console.log("Es impar")
// }


// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

const numeroAValidar = Number(prompt("Ingrese un número"))
console.log(numeroAValidar)
console.log(typeof numeroAValidar)


if ( numeroAValidar > 0 ) {
    console.log("Es positivo")
} else if ( numeroAValidar < 0 ) {
    console.log("Es negativo")
} else if ( Boolean(numeroAValidar) === false  ) {
    console.log("eso no es un número")
}

