// ESTO SE DENOMINA SCOPE: EL SCOPE ES EL ALCANCE DE UNA VARIABLE

// LA VARIABLE NOMBRE ES DE ACCESO GLOBAL, TODOS PUEDEN UTILIZARLA PORQUE ESTÁ AL ALCANCE

const nombre = "Juan"

if ( true ) {

    // estas variables tienen un acceso de bloque

    const apellido = "Urquia"
    console.log(apellido)
    console.log(nombre)

    if ( true ) {
        const edad = 20;      
        
        
        console.log(apellido)

        if (true) {
            console.log(edad)
        }


    }



    
}

console.log(nombre)
// console.log(apellido) --> no puedo acceder a un valor uqe está dentro de un bloque

if ( true ) {

} 

//SI LA VARIABLE SE ENCUENTRA DENTRO DE UN BLOQUE (ES DECIR FOR, IF, SWITCH, WHILE, DO WHILE, ETC, ENTONCES NO ES DE ACCESO GLOBAL)

// SI LAS VARIABLES ESTÁN DECLARADAS EN EL CÓDIGO Y NO ESTÁN EN UN BLOQUE, SON DE ACCESO GLOBAL

// EJMPLO DE VARIABLES GLOBALES

const nombreCliente = "Carolo"
const apellidoCliente = "Gomez"
const edadCliente = 50
const estaEnBlanco = true
const domicilio = "calle falsa 123"

// EJEMPLPO DE VARIABLES EN UN BLOQUE

if ( true ) {
    const gustoHelado = "menta granizada"
    const peliculaFavorita = "Lo minions"
    const videojuegos = "lol"
}

/////////////////////////////////////////

const saludarADani = "Hola Daniela"
const saludarAFabri = "Hola Fabricio"

console.log(saludarADani)
console.log(saludarAFabri)

// FUNCIONES 
// SON BLOQUES DE CÓDIGO REUTILIZABLES QUE PERMITEN SOLUCIONAR UN PROBLEMA ESPECÍFICO

// console.log()
// prompt()
// alert()

// FUNCIÓN POR DECLARACIÓN
// usan palabra reservada function
// tienen un identificador
// tienen paréntesis que permiten el uso e implementación de parámetros

function saludar () {
    console.log("hola Dani")
}

// precisamos invocar o llamar o ejecutar a la función para que esta funcione

saludar()

// las funciones, dentro de sus paréntesis permiten añadir "parámetros"
// PODEMOS AÑADIR TODOS LOS QUE NECESITEMOS, PERO TIENEN QUE ESTAR SEPARADOS POR COMA

function saludarATodos ( nombre ) {
    console.log(`¡Hola ${ nombre }!`)
}

// INCUMPLIMIENTO DE CONTRATO

saludarATodos() // SI NO LE PASAMOS EL DATO QUE LE PROMETIMOS, JAVASCRIPT RELLENA ESE ESPACIO CON UNDEFINED

// SI LE PASO EL VALOR, LA FUNCIÓN LO TOMA Y REEMPLAZA EL PARÁMETRO

// ESTA ACCIÓN SE LLAMA: "PASARLE UN ARGUMENTO"

saludarATodos("Matias")
saludarATodos("Juan")
saludarATodos("Joaquín")
saludarATodos(nombreCliente)
// saludarATodos(prompt("Pasame el nombre"))


// FUNCIÓN QUE ME PERMITE SUMAR NUMEROS
// declaro la función
// le paso dos parámetros (como si fuera un identificador)

function suma ( x , y ) {
    console.log( x + y)
}

suma() // si no le paso los argumentos a esta función, da NAN
suma(10 + 60, 600 / 2)

// EL ORDEN DE LOS PARÁMETROS IMPORTA

function verificarIdentidad ( nombre, apellido) {
    console.log(`Hemos verificado su identidad. Usted es: ${nombre} ${apellido}`)
}

// LLAMADA CON NOMBRE INCORRECTO

const identidadNombre = "Juan"
const identidadApellido = "Ayala"

verificarIdentidad(identidadApellido, identidadNombre)
verificarIdentidad(identidadNombre, identidadApellido)

// FUNCIÓN QUE ME PERMITE VER TODOS LOS RESULTADOS DE TODAS LAS TABLAS

function tablaDeMultiplicar ( numero ) {
    for ( let i = 1; i <= 10; i++ ) {
        console.log(`${ numero } x ${ i } = ${ numero * i } `)
    }
}

tablaDeMultiplicar(999)
tablaDeMultiplicar(5)
tablaDeMultiplicar(87)
tablaDeMultiplicar(-3)

// LAS FUNCIONES POR DEFECTO RETORNAN UNDEFINED

console.log(tablaDeMultiplicar(10))

// las funciones pueden RETORNAR DATOS
// SOLAMNETE SE PUEDE USAR UN RETURN DENTRO DE UNA FUNCIÓN

function multiplicacion ( a , b ) {
    return a * b
}


multiplicacion(50, 4)

console.log(multiplicacion(5, 4))

// ERROR SI SE USA FUERA DE LA FUNCIÓN

// if ( true ) {
//     return "hola"
// }

// PUEDO AÑADIRLO A UN BLOQUE SIEMPRE Y CUANDO ESTE SE ENCUENTRE DENTRO DE UNA FUNCIÓN

function validar () {
    if  (true ) {
        return "hola"
    }
}

validar()

console.log(validar())

let validacion = validar()

// LAS FUNCIONES PUEDEN LLAMARSE Y GUARDARSE EN OTRAS VARIABLES

const resultadoMultiplicacion = multiplicacion(10, 50)

console.log(resultadoMultiplicacion)

