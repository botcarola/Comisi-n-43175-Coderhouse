
// for repite todo lo que vos le digas, pero no recuerda lo que hace, solo repite

let alcancia = 0

for (let i = 0; i < 10; i++) { 
    // pongo la moneda sobre una nueva alcancía     
    alcancia = alcancia + 1
    console.log(`El valor ${i} actual de la nueva alcancía es: ${alcancia}`)
}

// los datos primitivos de tipo string pueden ser contenidos por comillas

const comillasSimples = 'Esta cadena está entre comillas simples'
const comillasDobles = "Esta cadena está sobre comillas dobles"

console.log("estoy concatenando " + comillasSimples + " y también " + comillasDobles)

// interpolación que es la combinación de una cadena y otros datos, que van aser transformados a cadena
// también le dicen template strings

const comillasBackticks = `Esto es una ${100000} cadena en backticks ${ comillasDobles } ${ comillasDobles }`

console.log(comillasBackticks)

// ejemplo concreto
// const nombreDelProducto = "Pelota"
// const valorProducto = 15000

// const nodo = `
// <div class="card">
//     <h2>
//         ${ nombreDelProducto }
//     <h2>
//     <h3>
//         ${ valorProducto }
//     </h3>
// </div>
// `

// document.querySelector("div").innerHTML = nodo

// COMO RECORRER UN STRING CON FOR

const nombre = "Nicolas" // tiene 7 caracteres
console.log(nombre.length)

for ( let i = 1 ; i < nombre.length; i++){
    console.log(nombre[i], i)
}

// MOSTRAME EL VALOR DE CADA UNO DE LOS CARACTERES DEL STRING NOMBRE, EN LA POSICIÓN DE I, cuanto vale i? 0

// 0 < 7 
// 1 < 7
// 2 < 7 
// 3 < 7
// 4 < 7
// 5 < 7
// 6 < 7
// 7 < 7 ---> esto no puede ser, porque la cantidad si bien es 7, el for arranca a contar valroes desde 0

// tiene una posición lógica que siempre arranca a contar de 0
// tiene una posición visual, que arranca a contar de 1


// ejemplo ejercicio 2

// let acc = 0

// for () {

// }

// if ( acc x cosa ) {
//     esto 
// } sino {
//     esto
// }

// EJEMPLO DE FUNCIONES CON VARIABLES

function suma ( x , y ) {
    return x + y
} 

console.log(suma(5 , 5))

function otraSuma ( x, y ) {
    const sumaParametros = x + y
    return sumaParametros 
}

function validarEdad ( edad ) {
    if ( edad > 18) {
        return true
    } else {
        return false
    }
}

console.log(validarEdad(28))


if ( validarEdad(79) ) {
    console.log("le puedo ofrecer un préstamo")
}

if ( validarEdad(5)) {
    console.log("le puedo ofrecer un préstamo")
}

