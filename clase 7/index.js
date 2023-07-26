// ¿Qué son las funciones?
// es una serie de pasos que permiten la resolución de una tarea
// un pedazo de código reutilizable (si usamos parámetros y pasamos argumentos)

// const calculadora = ( x, y, operador) => {

//     if ( operador === "suma") {
//         return x + y
//     } else if ( operador === "resta") {
//         return x - y
//     } else if ( operador === "multiplicacion") {
//         return x * y
//     } else if ( operador === "division" ) {
//         return x / y
//     }
// }

// console.log(calculadora)

// PARA ELEVAR LA ABSTRACCIÓN, VOY A ENAJENAR A LA FUNCIÓN DE ORDEN SUPERIOR DE LAS OPERACIONES MÁS SENCILLAS

const suma = ( x, y ) => x + y

const resta = ( x, y ) => x - y

const division = ( x , y ) => x /  y 

const multiplicacion = ( x, y ) => x * y


// ejemplo pro funcion por declaracion

// function sumaDeclaracion ( x, y ) {
//     return x + y 
// }

// NUEVA FUNCIÓN CON UN NIVEL DE ABSTRACCIÓN SUPERIOR A LA ANTERIOR

const calculadora = ( x, y, operacion ) => {
    return operacion(x, y)
}

const guardarMultiplicacion = calculadora(10, 478435, multiplicacion )

console.log( guardarMultiplicacion)

// ejemplo con prompts para pasar datos

// const primerDato = Number(prompt("Ingrese el primer dato"))
// const segundoDato = Number(prompt("Ingrese segundo dato"))
// console.log(calculadora(primerDato, segundoDato, suma ))

// FUNCIÓN DE ORDEN SUPERIOR
// SON FUNCIONES QUE OPERAN CON OTRAS FUNCIONES
// NOS PERMITEN ABSTRAER LAS ACCIONES
// NOS PERMITEN DIVIDIR LA LÓGICA EN OTRAS FUNCIONES Y CONSUMIRLAS
// SE PASAN COMO ARGUMENTOS
// SE PUEDEN RETORNAR OTRAS FUNCIONES

// MÉTODOS QUE ITERAN SOBRE ARRAYS, SON TODOS FUNCIONES DE ORDEN SUPERIOR
// TODOS ESTOS MÉTODOS RECIBEN COMO ARGUMENTO LO QUE SE DENOMINA UN CALLBACK

const nombres = [ "Alan", "Romina", "Juan"]

// el método push, no es un método que itere y tampoco recibe un callback

nombres.push("Lucas")
nombres.push("Michelle")
console.log(nombres)


// forEach
// es un método que itera arrays
// recibe un callback
// no retorna nada
// parámetro obligatorio que puede tener cualquier nombre
// el primer parámetro hace referencia al elemento actual
// el segundo al índice del elemento, porque es un array
// al array que se está iterando

nombres.forEach(( alumno, indice, array ) => {
    console.log(alumno.toUpperCase())
    console.log(indice)
    console.log(array)    
})

console.log(nombres)

// EL FOREACH ES COMO EL FOR, PERO ESTÁ ABSTRAÍDO

for ( let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// find (encontrar, buscar)
// busca un elemento en un array
// tiene un parámetro obligatio que representa al elemento actual
// este método retorna el elemento que encuentra
// si no encuentra lo que busca, retorna undefined
// para poder filtrar, tenemos uqe pensar como si estuvieramos haciendo una condición con if

const buscarAlumno = nombres.find(( persona, indice, array ) => {
    console.log(indice)
    console.log(array)
    return persona === "Lucas"
})

console.log(buscarAlumno)

// filter (filtrar)
// recibe un callback como argumento
// este callback tiene un parámetro obligatorio 
// el parámtro obligatorio es el elemento actual
// para poder filtrar, tenemos uqe pensar como si estuvieramos haciendo una condición con if
// retorna los valores que coincidan en la comparación
// si no hay valores que coincidan, retorna array vacío
// puede recibir hasta tres parámetros
// dos opcionales: indice y array

const clientes = [
    {
        nombre : "Adrian",
        tieneDeuda: false
    },
    {
        nombre: "Luis",
        tieneDeuda: false
    },
    {
        nombre: "Carola",
        tieneDeuda: true
    }
]

const clientesSinDeuda = clientes.filter(( cliente ) => {
    return cliente.tieneDeuda === false
})

console.log(clientesSinDeuda)

const clientesConDeuda = clientes.filter( cliente => cliente.tieneDeuda === true)

console.log(clientesConDeuda)

// some ( algunos )
// verifica que al menos un elemento del array cumpla con la condición
// recibe un callback como argumento 
// tiene un parámetro obligatorio que represneta al elemento acual
// retorna un boolean
// tiene hasta tres parámetros posibles, siendo el primer el obligatorio
// puede acceder a índice y array

const verificarDeuda = clientes.some(( cliente ) => {
    return cliente.tieneDeuda === true
})

console.log(verificarDeuda)

// map 
// este método retorna un nuevo array, que incluye a todos los elementos del array anterior en donde estos pueden ser transformados
// recibe un callback
// tiene hasta 3 parámetros, siendo el primero obligatorio en donde representa al elemento actual
// RETORNA UN ARRAY NUEVO

const nombresMayuscula = nombres.map(( nombre ) => {
    return nombre.toUpperCase()
})

console.log(nombres)
console.log(nombresMayuscula)

// reduce ( reduce )
// reduce actúa sobre un array y lo vuelve un dato individual
// lo reduce a un solo dato
// este dato ya no va a ser un array
// recibe un callback 
// recibe dos parámetros obligatorios: acumuladora, elementoActual, indice y array son opcionales
// retorna un valor unificado, que ya no es más un array
// no afecta al array original
// EL SEGUNDO ARGUMENTO DEL REDUCE, ES EL VALOR INICIAL
// puede ser un cero, en el caso de datos numbers
// puede ser "" en el caso de datos string
const numeros = [ 213213, 3434, 564, 1, 4989845, 4343, 223, 12, 12]


const reducirAUnicoValor = numeros.reduce((acc, numeroActual) => {
    return acc + numeroActual
}, 0)

console.log(reducirAUnicoValor)

const nodos = pokemon.reduce(( acc, elemento ) => {
    return acc + `
        <h2>
            ${elemento.name}
        </h2>
        <img src=${elemento.img} alt=${elemento.name}>
    `
},` <h2>
        Ditto
    </h2>
<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" alt="ditto">`)

document.write(nodos)


// ejemplo con un for

// let elementosHtml = ""

// for  (let i = 0; i < pokemon.length; i++ ) {
//     elementosHtml = elementosHtml + `
//         <h2>
//             ${pokemon[i].name}
//         </h2>
//         <img src=${pokemon[i].img} alt=${pokemon[i].name}>
//     `
// }

// console.log(elementosHtml)