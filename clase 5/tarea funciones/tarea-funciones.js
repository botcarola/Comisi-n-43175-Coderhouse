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

function semaforo ( colorActual ) {
    if ( colorActual === "verde") {
        console.log("Puede pasar")
    } else {
        console.log("No puede pasar")
    }
}

// LLAMADO, INVOCACIÓN O EJECUCIÓN DE LA FUNCIÓN

semaforo("verde")
semaforo("rojo")

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


// 1) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Envíe un mensaje en consola por cada iteración, con la siguiente frase: "¡¡Oh no, entré en un bucleeee!!"

function mensajeEnBucle ( mensaje ) {
    for ( let i = 0; i < 10; i++ ) {
        console.log(i + " " + mensaje)
    }
}

mensajeEnBucle("Oh no, entré en un bucle")
mensajeEnBucle("Prueba dos, del bucle")

// 2) Realice un bucle que tenga como valor inicial 20 y que itere hasta 50 veces. Visualice en consola cada incremento de la variable inicial.

// 3) Realice un bucle que muestre todas las vocales y consonantes de una palabra. La palabra tiene que estar dentro de una variable. - averiguar length en for con strings -
 
// const nombreEstudiante = "Sofía"
// const nombreDeLaProfe = "Carolina"

// console.log(nombreEstudiante)
// console.log(nombreEstudiante.length)
// console.log(nombreDeLaProfe.length)

// for ( let i = 0; i < nombreEstudiante.length; i++ ) {
//     console.log(nombreEstudiante[i])
// }

// 4) Realice un bucle que tenga como valor inicial 10 y que itere hasta 100 veces, de manera incluyente ( <= ). Este bucle deberá tener una variable acumuladora para obtener la suma de todos los números que se encuentren dentro de dicho rango.

// 5) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Haciendo uso de una variable acumuladora, sume solamente los números impares en las iteraciones.

// 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. Para valerse de un valor, genere una variable con su nombre. Precisarán de una variable acumuladora que cuente la cantidad de vocales.


// for ( let i = 0; i < nombre.length; i++ ) {
//     if ( nombre[i] === "a" ||  nombre[i] === "e" || nombre[i] === "i" || nombre[i] === "o" || nombre[i] === "u") {
//         acc = acc + 1
//         console.log(`Para el valor ${nombre[i]} la suma de la acumuladora por vocal es ${ acc }`)
//     }
// }



/// SINTAXIS

// for ( let i = 0; i < 10; i++ ) { sentencias a ejecutar }

