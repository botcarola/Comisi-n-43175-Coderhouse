function suma (a, b) {
    return a + b // explícito 
}

// arrow function

const nuevaSuma = (a , b) => {
    return a + b
}

// retorno implícito
// esta función tiene un valor propio, pero no tiene la palabra reservada return

const sumaImplicita = (a, b) => a + b

console.log(sumaImplicita(20, 4))

//////////////////////////////////////

// FUNCIONES DE ORDEN SUPERIOR
// por recibir como argumento una función
// por retornar una función

const clientes = [
    {
        nombre: "Lucas",
        adeuda: false,
        direccion: "calle falsa 123",
        cp: 1770
    },
    {
        nombre: "Sofía",
        adeuda: false,
        direccion: "calle falsa 23",
        cp: 1778
    },
    {
        nombre: "Mía",
        adeuda: false,
        direccion: "calle falsa 13",
        cp: 1772
    },
    {
        nombre: "Romina",
        adeuda: false,
        direccion: "calle falsa 1763",
        cp: 1774
    }
]

// forEach() --> recorre un array, por cada uno de los elementos
// su lógica está abstraída bajo su nombre
// literalmnete es un for

clientes.forEach(( cliente ) => {
    if (cliente.nombre === "Mía") {
        cliente.nombre = "aslkdd"
    }
})

console.log(clientes)

////////////////////////////////////////////////////

const numeros = [ 3423, 3284788, 67, 4, 222, 0, -Infinity, 4370.56546, 98, Infinity]

// sort ordenar
// es un método de array
// recibe un callback
// en el caso de que tratemos con números, dos parámetros obligatorios

// método para saber el valor unicode

console.log("/sdsad_ABG".charCodeAt(0))

// no nos sirve solamente usar el método, sin callback en números, porque ordena por unicode y no por su valor

console.log(numeros)

// uso slice para copiarme todo el array y no afectar al original

const copiaNumeros = numeros.slice().sort()

console.log(copiaNumeros)
console.log(numeros)

// uso de callback en sort para generar un ordenamiento de números apropiado

const sortOrdenadoAscendente = numeros.slice().sort(( a, b ) => {
    return a - b
})

console.log(sortOrdenadoAscendente)

// ordenar descendente

const sortOrdenadoDescendente = numeros.slice().sort(( a, b ) => {
    return b - a
})

console.log(sortOrdenadoDescendente)

// CÓMO ORDENAR STRINGS
// si usamos sort solo, sin callback, a los strings los ordena de la a - z

const frutas = ["kiwi", "naranja", "manzana", "sandia", "uvas", "apple", "tomate", "ñ"]

const copiaFrutasAZ = frutas.slice().sort()

console.log(copiaFrutasAZ)

// cómo ordenar de la a-z 

const copiaFrutasAZCallback = frutas.slice().sort(( a, b ) => {
    if ( a < b ) {
        return - 1
    } else if ( a > b ) {
        return 1
    } else {
        return 0
    }
})

console.log(copiaFrutasAZCallback)

// como ordenar de z-a
// PARA DESCENDENTE NECESITA ESTA SINTAXIS SI O SI

const copiaFrutasZACallback = frutas.slice().sort(( a, b ) => {
    if ( b < a ) {
        return - 1
    } else if ( b > a ) {
        return 1
    } else {
        return 0
    }
})

console.log(copiaFrutasZACallback)

///////////////////////////////////////////////////////////////
// los objetos tienen propiedades que pueden contener datos
// los objetos tienen métodos (sus funciones integradas), que pueden ser utilizado a traves de la notación de .

// OBJETO MATH
// tiene propiedades y métodos para constantes y funciones matemáticas.

console.log(Math)

// constante de Euler

console.log(Math.E)

// valor de PI

console.log(Math.PI)

// PODEMOS HACER USO DE SUS MÉTODOS

// Math.min, devuelve el menor número que se pase como argumento
// Math.min no procesa arrays, no tiene un iterador interno (no tiene bucle)
// simplemente recibe x cantidad de argumentos

console.log(Math.min(5, 78678, 1.6, 999999, -50000))

// si uso un spread operator sobre un array, puedo pasarle como argumento esto a un Math.min
// porque el spread operator tiene un iterador interno

console.log(Math.min(...numeros))

// Math.max

console.log(Math.max(28, 6435, 92348029, 4, -10000000))

// Math.sqrt la raíz cuadrada de un número

console.log(Math.sqrt(53))

// Math.random
// es un método pseudoaleatorio
// devuelve un número entre el 0 y 1

console.log(Math.random())

// Podemos modificar el rango haciendo uso de una fórmula
// Math.random() * (max - min) + min;

console.log(Math.random() * ( 1000 - 1 ) + 1 )

// Math.floor
// redondea hacia abajo
const numeroRandom = Math.random() * ( 1000 - 1 ) + 1 
console.log(Math.floor(numeroRandom))

// Math.ceil
// redondea hacia arriba

console.log(Math.ceil(numeroRandom))

/////////////////////////////////////////
// OBJETO DATE

// instanciamos una fecha
// la fecha es actual si no le pasamos argumentos
// la fecha va a cambiar si actualizamos la página

const fechaActual = new Date()
console.log(fechaActual)
console.log(typeof fechaActual)

// en JS los meses van de 0 a 11
// es año - mes - día

const ultimoDia99 = new Date(1999,11, 31)
console.log(ultimoDia99)

// declaro una variable con la fecha actual

const fecha = new Date()

// getMonth()
// el mes corriente o el de una fecha definida

console.log(fecha.getMonth())
console.log(ultimoDia99.getMonth())

// getDate()
// día de hoy o día de una fecha definida

console.log(fecha.getDate())
console.log(ultimoDia99.getDate())

// getFullYear()

console.log(fecha.getFullYear())
console.log(ultimoDia99.getFullYear())

// resta entre fechas
console.log(fecha - ultimoDia99)

// SI YO USO LOS MÉTODOS DE TRANSFORMACIÓN PARA FORMATO DE FECHAS, DEJAN DE SER OPERABLES Y SE VUELVEN STRINGS
// NO PUEDO HACER OPERACIONES ENTRE ELLOS CUANDO SON STRINGS

// toDateString()
// se visualiza la fecha en formato americano

console.log(fecha.toDateString())

// toLocaleDateString()
// muestra la fecha en formato local

console.log(fecha.toLocaleDateString())

// muestra fecha y hora en formato local

console.log(fecha.toLocaleString())

// toTimeString()

console.log(fecha.toTimeString())