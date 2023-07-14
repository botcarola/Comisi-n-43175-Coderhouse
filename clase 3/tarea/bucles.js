// 1) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Envíe un mensaje en consola por cada iteración, con la siguiente frase: "¡¡Oh no, entré en un bucleeee!!"

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

let acc = 0;
const nombre = "Fabricio";

// for ( let i = 0; i < nombre.length; i++ ) {
//     if ( nombre[i] === "a" ||  nombre[i] === "e" || nombre[i] === "i" || nombre[i] === "o" || nombre[i] === "u") {
//         acc = acc + 1
//         console.log(`Para el valor ${nombre[i]} la suma de la acumuladora por vocal es ${ acc }`)
//     }
// }


for ( let i = 0; i < nombre.length; i++ ) {
    if ( nombre[i].match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/)) {
        acc = acc + 1
    }
}

console.log(acc)

/// SINTAXIS

// for ( let i = 0; i < 10; i++ ) { sentencias a ejecutar }

