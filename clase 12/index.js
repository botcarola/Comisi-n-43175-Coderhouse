// sugar syntax
// acuñado por peter landin
// plantea una forma que facilite la legibilidad del código
// plantea la abstracción del código
// es una versión simplificada del código

let valor = 10;

valor = valor + 1;

// podemos simplificar la operacion de reasignación y suma
// con el operador +=, para cualquier número mayor a 1

valor+=2

console.log(valor)

let acc = 0

for ( let i = 0; i < 10; i++ ) {

    acc+=10
    console.log(acc)
}

console.log(acc) // si hago console.log fuera del bucle, slo veo el valor final

// OPERADOR UNARIO
// operadores que se aplican a un solo operando
// el operador ++ incrementa en 1 y el operador -- decrementa en 1

let edad = 28

// si se usa de manera posterior al valor, primero se retorna el valor y luego se hace el incremento

console.log(edad++)

console.log(edad)

// si lo utilizo antes del valor, lo incrementa y lo retorna

let edadDeMia = 18

console.log(++edadDeMia)

// cortocircuito

let edadCliente = 15
let permisoDeLosPadres = true

if ( edadCliente >= 18 || permisoDeLosPadres === true ) {
    console.log("puede ver la película de terror japonesa experimental")
}

// OR
// como cortocircuito, devuelve la primera coincidencia que sea true

const jamon = 0
const queso = 1
const pan = 0


console.log( jamon || queso || pan )


let clientes = [
    {
        nombre: "Alan",
        cliente: true
    },
    {
        nombre: "Adrian",
        cliente: false
    },
    {
        nombre: "Luis",
        cliente: true
    },
    {
        nombre: "Matias",
        cliente: false
    }
]

clientes.forEach( elemento => {
    console.log( elemento.cliente || "Bienvenido nuevo cliente" ) 
})

// si se altera el oorden, puede alterar los resultados

// clientes.forEach( elemento => {
//     console.log( "Bienvenido nuevo cliente" || elemento.cliente)
// })

// and
// DEVUELVE EL ÚLTIMO VALOR, SINO UNDEFINED
// si el primer operando es true, entonces retorna, devuelve o ejecuta el segundo operando
// DEPENDE DE QUE EL PRIMER OPERANDO SIEMPRE SEA TRUE - Y POR SUPUESTO EL SEGUNDO -

const saludarAUsuario = () => {  
        alert("¡Hola cliente!")    
}

const verificarSiEsCliente = false
verificarSiEsCliente && saludarAUsuario()

// es lo mismo que esto

// if (verificarSiEsCliente) {
//     saludarAUsuario()
// }

// OPERADOR TERNARIO
// es un if / else en una sola sentencia
// condicion ? para caso true : para caso false

const edadDelAdolescente = 15
const aprobacionPadres = true

edadDelAdolescente >= 18 || aprobacionPadres ? console.log("Puede ver la película") : console.log("No puede ver la película")

edadDelAdolescente >= 18 ? console.log("Puede ver la película") : console.log("No puede ver la película")

// SI ESTO ES TRUE ? ENTONCES ESTO : SINO ESTO OTRO

const cuentas = false;

cuentas ? cuentas.map( cuenta => console.log(cuenta)) : "No hay cuentas disponibles"

// nullish coalescing (fusión nula)
// ??
// funciona como un or, retorna el primer valor que no sea false o falsy
// evalúa si el primer operando es null o undefined, si no lo es, retorna el primer valor, sino el segundo
// SI ES NULL O UNDEFINED, ENTONCES DEVUELVO EL SEGUNDO OPERANDO
// SI NO ES NULL O UNDEFINED, ENTONCES DEVUELVO EL PRIMER OPERANDO
// al nullish no le interesa si un valor es true o false, solo si es null o undefined

console.log( 0 ?? "El primer operando no es null" )
console.log( null ?? "el primer operando es null" )
console.log( NaN ?? 0)

const clienteBanco = undefined;

console.log(clienteBanco ?? "No es cliente")

// optional chaining
// el uso de este operador siempre va a estar relacionado a propuiedades anidadas
// valida que si no existe una propiedad anidada, no se genere un error que interrumpa la ejecución del código
// el operador es el signo de pregunta ?
// se incorpora entre las propiedades que aniden propiedades y puedan ser undefined

const persona = {    

}

console.log(persona.familia)
console.log(persona.familia?.hermano)

// ejemplo con objeto

let mesa;

console.log(mesa?.color || "No hay color disponible")

console.log(mesa?.altura ?? "No hay altura disponible")

// destructuring 
// características que permite extraer valores de un objeto o array
// sintaxis: const { propiedad1, propiedad2 } = objeto;
// puedo extraer todos los valores, puedo usar todas las propiedades

const silla = {
    patas: 4,
    color: "rojo",
    precio: 3000,
    material: "madera"
}

const { color, precio, material, patas } = silla;

console.log(silla.material)
console.log(material)

// ALIAS DE LOS OBJETOS 
// un alias es un sobrenombre
// se le añade un sobrenombre a la propiedad en el destructuring, para no ocupar el mismo identificador
// se puede asignar un nombre distinto a pesar de llamar a las propiedades de los objetos en distintas ocasiones

const { color: colorDeLaSilla } = silla; 

console.log(colorDeLaSilla)

const producto = {
    product_number: 87324,
    type: "askljdasd"
}

const { product_number: identificador } = producto;