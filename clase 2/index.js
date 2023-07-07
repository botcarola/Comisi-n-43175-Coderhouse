// null y undefined

let edad = 29
edad = 30

// let esEstudiante;

// undefined representa la ausnecia de asignación de valor

// console.log(esEstudiante)

// null significa ausencia de valor

// let noEsEstudiante = null;

//////////////////////////////////

// BOOLEAN

// true (verdadero)
// false (falso)

let esEstudiante = true;
let esProfesora = true;
let fabricioEsProfe = false;

console.log(esEstudiante)

/////////////////////////////////

// ESTADO BOOLEANO

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0)) // falsy
console.log(Boolean("")) // falsy
console.log(Boolean(NaN))
console.log(Boolean(false))

// con typeof podemos verificar el tipo de dato

console.log(typeof Boolean("prueba"))

// OPERADORES DE COMPARACIÓN
// SE COMPARAN DOS OPERANDOS 
// es que siempre devuelven un booleano

// OPERADOR MAYOR A 

console.log( 10 > 100 )

// operador menor a

console.log( -1110 < -100)

// operador MAYOR O IGUAL

console.log( 10 >= 5)

// operador MENOR O IGUAL

console.log( 100 <= 100 )

// operador de igualdad
// no verifica el tipo de dato, verifica si son iguales

console.log( 10 == "10" )

// operador de igualdad estricta

console.log( 10 === "10" )

console.log( 10 === 10 )

// case sensitive

console.log( "fabri" === "Fabri" ) // fasle

console.log( "fabri" == "Fabri" ) // false

// operador de desigualdad

console.log( 100 != "100"  ) // no es estricto

// operador de desigualdad estricta

console.log( 100 !== "100" )

// COMPARAR UNDEFINED CON NULL

console.log( null === undefined )

console.log( null == undefined )

///////////////////////////////////////

// OPERADORES LÓGICOS

// AND && ( ampersand )
// QUE AMBOS OPERANDOS TIENEN QUE SER TRUE

const jamon = false

const queso = "si"

console.log( jamon && queso )

// el operador && ES TRUE SOLAMENTE CUANDO TODOS LOS CASOS SON VÁLIDOS

console.log( true && true ) // true

console.log( true && false ) // false

console.log( false && false ) // false

console.log( false && true ) // false

console.log(  100 && 10 && 0 && 50 && 98 ) // false

// OR ||

// ES EL OPERAR O Y VERIFICA QUE AL MENOS 1 ELEMENTO DE LA CADENA SEA TRUE
// SIEMPRE DEVUELVE EL PRIMERO QUE SEA VERDADERO, QUE SEA TRUE

console.log( true || false ) 

console.log( true || true )

console.log( false || true )

console.log( false || false )

// COMBINACIÓN DE OPERADORES COMPARACIÓN Y LÓGICOS 

const usuario = "carola@live.com"
const contrasenia = "contraseña123"

// const preguntarUsuario = prompt("Ingrese su usuario")
// const preguntarContrasenia = prompt("Ingrese su contrasenia")

// console.log( (usuario === preguntarUsuario) && (contrasenia === preguntarContrasenia) )

// PREGÚNTA SI EL USUARIO ES IGUAL AL INGRESADO Y PREGUNTÁ SI LA CONTRASEÑA ES IGUAL A LA INGRESADA ---> SI SON IGUALES, AVISÁ QUE ES UN SI

// PARA PODER EXTENDER FUNCIONALIDADES Y REALIZAR EJECUCIONES DE CÓDIGO AL REALIZARSE UNA COMPARACIÓN DE OPERANDOS DE COMPARACIÓN Y LÓGICOS, PODEMOS USAR UN IF

// si( esto que está acá es true ) { se ejecuta esto }

// if ( (usuario === preguntarUsuario) && (contrasenia === preguntarContrasenia) ) {
//     alert("BIENVENIDO AL SITIO WEB")
// } else {
//     alert("Usuario o contraseña incorrecta")
// }

/// VALIDAR CON MÚTIPLES IF  A UN USUARIO 

const administrador = "admin"
const password = "TheMaster"
const usuarioPrompt = prompt("Ingrese su usuario") 

if ( usuarioPrompt === administrador ) {

    const passwordPrompt = prompt("Ingrese su password")

    if ( passwordPrompt === password ) {
        alert("Bienvenido!")

    } else if ( passwordPrompt !== password && passwordPrompt !== null ) {
        alert("Contraseña incorrecta")

    } else if ( passwordPrompt === null ) {
        alert("Cancelado")
    }   

} else if ( usuarioPrompt !== administrador && usuarioPrompt !== null ) {
    alert("No te conozco")   

} else if ( usuarioPrompt === null ) {
    alert("Cancelado")
}
