// console.log es un método que me permite visualizar algo en consola

console.log("Hola, estoy vinculado desde el head");

// así se declara una variable de tipo let
// permite la reasignación del valor

let edad;
edad = 28;

// la asignación o reasignación de un valor, se hace a través de un operador =

let nombre = "Sofía";
console.log(nombre)

nombre = "Joaquín";
console.log(nombre)

// si necesito declarar una variable que sea inmutable - que no cambie - voy a utilizar la palabra reservada const

const nombreDelEstudiante = "Guido";

console.log(nombreDelEstudiante)

// Esto es ilegal al declarar variables con const, debido a que no se puede reasignar el valor
// nombreDelEstudiante = "Rocío";

// el valor por defecto de una variable declarada con let es undefined (no existe/vacío)

let gustoHelado;

console.log(gustoHelado)

// al utilizar const, no se puede realizar esta acción, debido a que su valor no puede ser undefined ni tampoco puede reasignarse.

// const suma; ---> error

///////// SINTAXIS BÁSICA DE JAVASCRIPT /////////

//let GUSTODEHELADO; // MALA PRÁCTICA
//let 1212831023; // MALA PRÁCTICA
//let _nombreUsuario;// 

// FORMA IDEAL DE DECLARAR UNA VARIABLE: camel case

let nombreYApellidoDelUsuario;

// NO VAMOS A QUERER DECLARAR VARIABLES ASÍ

let x;
let z;

// vamos a querer ser explícitos sobre el contenido

let password;

 // PUEDO INCLUIR COMENTARIOS CON LA DOBLE BARRA


/*
añsldkañsldkñaslkdsa
esto es un comentario
aslkdjklasjd
*/

// JAVASCRIPT ES CASE SENSITIVE
// es sensible a las diferencias

// carolina CAROLINA CarOlina ---> TODOS ESTOS NOMBRES SON DIFERENTES PARA JAVASCRIPT

// nombreDelUsuario
// nombredelusuario --> TODOS ESTOS IDENTIFICADORES SON DIFERENTES

////////////////////////////////////////

// CUANDO USAMOS VARIABLES MANIPULAMOS TIPOS DE DATOS

// NUMBER 

const numeroEntero = 10;
const numeroFlotante = 10.5;

// operadores

// suma
console.log( 5 + 5 )

// resta 
console.log(10 - 5)

// multiplizar
console.log(10 * 2)

// división
console.log( 10 / 10)

// CONCATENACIÓN

console.log( "5" + 5 ) 
console.log("persona" + 5)

// CONVERSIÓN DE TIPO

console.log( "5" * 5)
console.log( "10" - 5)
console.log( 1000 / "5")

// NaN (not a number)

console.log( "a" * "a")
console.log( "persona" * 5)
console.log( Infinity / "hola")

// STRINGS
// son las cadenas de caracteres que no son más que símbolos que pueden ser alfanuméricos y también signos de puntuación y otros.

// comillas dobles
const frase = "los strings van siempre dentro de comillas";

// comillas simples
const fraseSimple = 'Esta cadena se encuentra dentro de comillas simples'

// backtikcs
// INTERPOLACIÓN
// TEMPLATE STRINGS
const pruebaBackticks = `Vamos a usar este superpoder para interpolar este número: ${ 10000 * 34 }`

console.log(pruebaBackticks)

console.log("hola gente " + "como están")

//////////////////////////////////////////

// CÓMO SÉ CON QUÉ TIPO DE DATO ESTOY TRABAJANDO?

// typeof

console.log(typeof "hola mundo")

console.log( typeof 1000)

console.log( typeof ("5" + 5))

////////////////////////////////////////
// interactuar con el usuario

// alert permite enviar un modal al usuario para notificarlo de algo

// alert("hola gente, soy un modal")

// const modal = alert("son el segundo alert")

// prompt

const edadDelUsuario = prompt("Ingrese su edad");
console.log(edadDelUsuario)

alert(`La edad del usuario es de: ${edadDelUsuario}`)