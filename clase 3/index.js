// != !==, ==, ===, <, >, <=, >= ---------> boolean
// true === true --> true
// 1 === 1 --> true
// 1000 >= 10 ---> true

// NECESITO UN PROGRAMA QUE EVALÚE EL TIPO DE VERDURA QUE QUIERE EL CLIENTE Y LE DIGA EL PRECIO DEL KILO

// const frutaOVerdura = prompt("ingrese su producto")

// if ( frutaOVerdura === "pomelo" ) {
//     console.log("el kg está 700")
// } else if ( frutaOVerdura === "lechuga" ) {
//     console.log("el kg está 500")
// } else if ( frutaOVerdura === "naranja") {
//     console.log("el kg está 500")
// } else {
//     console.log("no tengo esta fruta o verdura")
// }

// switch 
// es un tipo de método que permite comparar un valor con múltiples casos

// switch ( frutaOVerdura ) {
//     case "banana":
//         console.log("el kilo de banana está 800")
//         break;        
//     case "naranja":
//         console.log("el kilo de naranja está 700")
//         break;        
//     case "pomelo":
//         console.log("El kilo de pomelo está 700")
//         break;
//     case "acelga":
//     case "espinaca":
//         console.log("el kilo de acelga y espinada es de 300")
//         break;
//     default:
//         console.log("no contamos con este producto")
// }

// BUCLES

// let i = 0;

// if ( i < 10 ) {
//     console.log("es válido")
// }

// i = i + 1

// if ( i < 10) {
//     console.log("es válido")
// }

// i = i + 100

// if ( i < 10) {
//     console.log("es válido")
// }

// que podemos hacer uso de algo que genere un acercamiento repetitivo para la ejecución de una tarea
// que se puede reducir código

// for 
// for ( inicialización; condición; contador  ) {
//    sentencias a ejecutar
//}

for (let i = 0; i < 10; i = i + 3 ) {

    console.log(i)

}

// VARIABLE I VALE CERO, CERO ES MENOR A 10, ENTONCES LE SUMO 1
// VARIABLE I VALE UNO, UNO ES MENOR A 10, ENTONCES LE SUMO 1

// ORDEN DE EJECUCIÓN

// 1) se declara la variable i, con el valor asignado
// 2) se verifica la condición
// 3) se ejecuta la instrucción o sentencia del bloque de llaves
// 4) se incrementa la variable inicial

// EJEMPLO PRÁCTICO QUE IMPACTA EN EL HTML

for ( let i = 0; i <= 15; i++ ) {

    document.write(`<h3> Este es el encabezado n°: ${i} </h3>`)

}

// PROGRAMA QUE DISTINGA VALORES PARES

// let valorInicial = Number(prompt("Eliga un valor inicial"))
// const valorMaximo = Number(prompt("elija un vlaor máximo"))

// for ( valorInicial; valorInicial <= valorMaximo; valorInicial++ ) {
    
//     if ( valorInicial % 2 !== 0 ) {
//         console.log(valorInicial)
//     }
// }

for ( let i = 0; i < 100; i++ ) {
    
    if ( i === 0 ) {
        console.log("Este valor es 0 querido")
    }
    else if( i % 2 !== 0 ) {
        console.log(`El número ${ i } es impar`)
    } else if ( i % 2 === 0 ) {
        console.log(`El número ${ i } es par`)
    } 
}

///////////////// 

// while
// sintaxis

// while ( condicion ) {
// sentencias   
//}

let valorInicial = 0;
while ( valorInicial < 3 ) {
    console.log(`El valor del while va por ${ valorInicial }`);
    valorInicial++;
}

// COMO LOS RECURSOS SON FINITOS, ESTE WHILE QUE CONSUME INFINITAMENTE LA MEMORIA, ROMPE TODO

// HAY QUE TENER CUIDADO CON LOS ITERADORES  

// while (true) {
//     console.log("hola xd")
// }

// FOR CON ACUMULADORA

let acc = 0

for ( let i = 0; i < 10; i++ ) {
    acc = acc + i
    console.log(acc)
}

console.log(acc)