// PROGRAMACIÓN SINCRÓNICA
// LAS INSTRUCCIONES SE EJECUTAN UNA TRAS OTRA EN SECUENCIA

// console.log("PRIMER MENSAJE")
// console.log("SEGUNDO MENSAJE")
// console.log("Tercer mensaje")

// en los casos en los cuales se deben procesar diversas funciones, se hará de manera LIFO

// const suma = ( a , b ) => {
//     return a + b
// }

// const multiplicarPorDos = (a , b) => {
//     return suma(a , b) * 2
// }

// console.log( multiplicarPorDos(10, 478))
// console.log("aslkdjlsakdjsad xd")

// ASINCRONÍA
// Javascript utiliza un modelo asíncrono y no bloqueante, con un loop de eventos implementado con un único thread para sus interfaces de entrada/salida.

// console.log("SOY PRIMERO")

// setTimeout es un método asincrónico que ejecuta un callback luego de que se cumplen la cantidad de milisegundos
// setTimeout(()=>{}, 1000)
// este método es entendido como asincrónico por la web api, que se encarga de tomarse el tiempode que cada código asincrónico termine de completar su tarea
// eso significa que JS primero procesa todo el código sincrónico y luego el asincrónico

// setTimeout(() => console.log("SOY SEGUNDO"), 0)

// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")
// console.log("Soy tercero")

// // ejemplo 2 setTimeout

// const esperaDeCincoSegundos = setTimeout( () => console.log("espera de 5 segundos"), 5000)

// los callback en js existen porque las funciones son de primera clase
// las funciones pueden manipularse como variables
// a través de su identificador

// function romperTodo () {
//     romperTodo()
// }

// romperTodo()

// setInterval
// ejecuta un callback cada cierta cantidad de tiempo en forma de loop
// recibe un callback y la cantidad de milisegundos

const cadaTresSegundos = setInterval( () => console.log("cada tres segundos me visualizo"), 3000)

// clearTimeout
// permite interrumpir el proceso asincrónico timeout
// precisa como argumento el identificador que contiene el timeout

// clearTimeout(esperaDeCincoSegundos)

// clearInterval
// permite interrumpir el proceso asincrónico interval
// precisa como argumento el identificador que contiene el intervalo

clearInterval(cadaTresSegundos)

// ejemplo de cleatInterval en setTimeOut

setTimeout(() => clearInterval(cadaTresSegundos), 6000)

// PROMESAS
// las promesas son asincrónicas
// representa la respuesta de un evento a futuro que tiene como resultado algo incierto
// esta respuesta se puede dar, cuando, no lo sabemos

// las promesas tienen tres estados
// el estado por defecto, es pendiente (pending), en donde la promesa aguarda a que se genere una respuesta
// al solucionarse el estado pendiente, puede generar un resolve (resuelto) y un reject (rechazado)

const laPromesa = new Promise(( resolve, reject ) => {

})

console.log(laPromesa)

// EJEMPLO CON PROMESA PARA VISUALIZAR RESOLVE Y REJECT

const evaluar = nota => new Promise(( resolve, reject ) => {
    nota > 7 ? resolve("Usted aprobó") : reject("Usted desaprobó")
})

// console.log(evaluar(4))

// carga de imagen con promesas

function cargarImagen ( url ) {
    return new Promise( ( resolve, reject ) => {
        const image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = ( error ) => reject(error)
    })
}

// PUEDO ACCEDER A LOS VALORES DE LA RESOLUCIÓN O RECHAZO DE UNA PROMESA, A TRAVÉS DE THEN Y CATCH

cargarImagen("trayecto-callstack-eventloop.jpg")
.then(( nodo ) => {
    console.log(nodo)
})
.catch( (error) => {
    console.error("Error al cargar la imagen", error)
})

// simulación de una llamada a una api con promesa

function fetchData() {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve({
                data: "data de la api, etc etc"
            })
        }, 3000)
    })
}

fetchData()
.then(( respuesta ) => {
    console.log(`La respuesta de la API es: ${ respuesta.data }`)
})


// promesa que se rechace a sí misma

function promesaRechadazada () {
    return new Promise(( resolve, reject ) => {
        reject("La promesa ha sido rechazada")
    })
}

// tenemos un método finally

promesaRechadazada()
.catch( (error) => {
    console.error("motivo del rechazo", error)
})
.finally(() => {
    console.log("HA TERMINADO EL PROCESO DE RECHAZO")
})