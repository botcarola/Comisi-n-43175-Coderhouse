const apellido = "Ribeca";

const persona = {
    nombre: "Adrian",
    apellido: "Ayala",
    edad: 18
}

const { apellido : apellidoPersona } = persona;

console.log(apellido)
console.log(apellidoPersona)

// Destructuring de arrays

const frutas = [ "Kiwi", "Banana", "Manzana", "Ciruela" ]

const [ , , , ciruela ] = frutas;

// console.log(frutaAlergia)

// console.log(frutaLicuado)

console.log(ciruela)

//  SPREAD OPERATOR
// ES UN OPERADOR QUE PERMITE DESCOMPONER ELEMENTOS DE UN DATO ITERABLE

// SI LO USAMOS CON UN MATH.MAX, PODEMOS PASAR UN ARRAY COMO PARÁMETRO, YA QUE EL SPREAD OPERATOR SE ENCARGARÁ DE DESCOMPONER CADA VALOR Y PASARLO AL MÉTODO

const random = [ 1283, 3, 1, -69, Infinity, 480923489234]

console.log(Math.max(...[3, 6506, 3 ,23423]))
console.log(Math.min(...random))

// COMBINAR ARRAYS

const combinarArrays = frutas.concat(random)

console.log(combinarArrays)

const combinarConSpread = [...frutas, ...random]
console.log(combinarConSpread)

// Copia segura con SPREAD OPERATOR

const numeros = [ 0, 1 ,2 ,3 ,4 ,5, 6, 7, 8, 9 ]

const numerosCopiados = numeros;

numerosCopiados.push(210938123) // afecta a la referencia

console.log(numeros === numerosCopiados) // true

console.log(numeros)

// slice, stringify-parse , spreadoperator

const copiaSegura = [...numeros]

copiaSegura.push("unico y detergente")

console.log(copiaSegura)

console.log(numeros)

// ej copia con strigify - parse

const clientes = [
    {
        nombre: "sarasa"
    },
    {
        nombre: "sarasa"
    },
    {
        nombre: "sarasa"
    },
    {
        nombre: "sarasa"
    }
]

const copiaClientes = clientes;

console.log(clientes === copiaClientes)

const copiaClientesSegura = JSON.parse(JSON.stringify(clientes))

console.log(clientes === copiaClientesSegura)

// spread operator en objetos

const mesa = {
    patasMesa: 4,
    colorMesa: "negro"
}

const silla = {
    patasSilla: 3,
    colorSilla: "naranja"
}

const juegoDeMesaYSillas = {...mesa, ...silla}

console.log(juegoDeMesaYSillas)

// REST PARAMETERS
// Este operador, ..., nos permite pasar x cantidad de parámetros bajo un solo parámetro visible
// Siempre se genera un array al usar rest parameters
// se deberá iterar para acceder a los valores de los parámetros

const suma = (...numeros) => {
    console.log(numeros)
    return numeros.reduce(( acc, element ) => {
        return acc + element
    }, 0)
}

console.log(suma(10, 5 ,67, 2, 456, 231))