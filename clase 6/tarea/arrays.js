// Ejercicios arrays
// estos ejercicios deben resolverse con funciones
// las funciones deben contener el bucle que se ocupe de resolver casos genéricos. Ej:

const letras = ["a", "b", "c", "d"]

const cosas = [ "vaso", "papel", "lapicera"]

const recorrerArray = ( lista ) => {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

recorrerLetas(letras)
recorrerLetas(cosas)

// también pueden hacerlo con función por declaración

function recorrerListas ( lista ) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

recorrerListas(letras)
recorrerListas(cosas)

// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva(retorne) el menor de ellos. Ejemplo:
// let numeros = [ 20, 3095, 43, 6545, 12, 54, 78 ]
// obtenerNumeroMenor(numeros) 

// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva(retorne) la suma de ellos. Ejemplo:
// sumarNumeros([5, 7, 10, 12, 24]) ---> retorna 58

// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.Ejemplo:

//separar('🐶🐱🐶🐱🐱🐶🐶') ---> retorna '🐶🐶🐶🐶🐱🐱🐱'

// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77]) // [20, 50, 770]