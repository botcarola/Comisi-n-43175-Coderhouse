// El objeto Storage nos facilita la posibilidad de almacenar de manera local datos o preferencias del usuario
// esto puede ayudar a la experiencia del sitio
// este Storage nos ofrece dos perspectiva: 
// 1) localStorage prevalece en el tiempo
// 2) sessionStorage es dinámico, es decir, al cerrar la pestaña o navegador, se pierde la info

//NO SUBIR DATOS SENSIBLES AL STORAGE

// LOCALSTORAGE

console.log(localStorage)

// para incorporar una clave/valor en el localStorage, tengo uqe hacer uso de setItem

// localStorage.setItem("modoOscuro", "si")

// ejemplo de suba de clave/valor a través de un evento

document.querySelector("button").onclick = () => {
    localStorage.setItem("modoOscuro", "si")
}

// cómo obtener datos del localStorage: getItem
// los valores obtenidos deben ser alojados en una variable, para poder ser utilizados
// cuando obtenemos un clave/valor, siempre obtenemos realmente el valor, ya que la clave es como un identificador
// es necesario recordar que todo dato que se obtenga del storage, siempre es un string

const modoOscuro = localStorage.getItem("modoOscuro")

console.log(modoOscuro)

const validarModoOscuro = modo => {
    if ( modo === "si" ) {
        console.log("El sitio web se cargará con modo oscuro")
    } 
}

validarModoOscuro(modoOscuro)

// si la clave no existe ni representa nada, el getItem devuelve null

const papafrita = localStorage.getItem("papafrita")

// SESSIONSTORAGE
// este almacenamiento es temporal
// su temporalidad está definida por el cierre de la pestaña o del navegador
// al cerrarse deja de existir la clave

console.log(sessionStorage)

// AÑADIR UN DATO AL SESSIONSTORAGE

// sessionStorage.setItem("cliente", "askdjlas203213kls")

// ejemplo de ID del usuario

// función que permite subir elemento al sessionStorage

const subirAlSessionStorage = (clave, valor) => sessionStorage.setItem(clave, valor)

// const validarUsuario = prompt("Diga su nombre")

// const validarPersona = usuario => {
//     if ( usuario === "Adrian") {
//         subirAlSessionStorage("usuario", "a-1")
//     } else if ( usuario === "Juan" ) {
//         subirAlSessionStorage("usuario", "j-2")
//     } else if ( usuario === "Eduardo") {
//         subirAlSessionStorage("usuario", "e-3")
//     }
// }

// validarPersona(validarUsuario)

/////////////////////////////////////////////////////////////////

// como remover una clave/valor del localStorage y sessionStorage

localStorage.removeItem("chizitos")

sessionStorage.removeItem("papafrita")

// quiero borrar todas las claves del local o session

// localStorage.clear()

// sessionStorage.clear()

// SUPONGAMOS QUE QUIERO TRABAJAR CON ARRAY DE OBJETOS

const carrito = [
    {
        id: 213821,
        nombre: "Protector solar",
        precio: 5000
    },
    {
        id: 213851,
        nombre: "Hidratante",
        precio: 6000
    },
    {
        id: 21321,
        nombre: "Niacinamida",
        precio: 4000
    },
]

console.log( typeof carrito)

// SI INTENTO SUBIR UN DATO COMPLEJO, COMO UN ARRAY DE OBJETOS, AL RECIBIR STRING EL STORAGE, LO TRANSFORMA Y CORROMPE

// localStorage.setItem("carrito", carrito)

// para esto usamos JSON
// cuando usamos el método stringify, volvemos a los datos cadenas de caracteres (strings)
// al modificarlos, podemos subirlos al localStorage y preservar su forma

const carritoAJson = JSON.stringify(carrito)

console.log(typeof carritoAJson)

localStorage.setItem("carrito", carritoAJson)

// al obtener los datos, van a seguir siendo JSON (strings)
// para poder operar con los datos extraídos del storage, debemos parsearlos con el método JSON.parse

const productosDelCarrito = localStorage.getItem("carrito")

const productosParseados = JSON.parse(productosDelCarrito)

console.log( productosParseados)

// EJEMPLO DE LISTA DE TAREAS QUE ACTUALIZA EL LOCALSTORAGE

let tareas = []

const inputNombreTarea = document.querySelector("#input-nombre")
const inputTarea = document.querySelector("#input-tarea")

console.log(inputNombreTarea, inputTarea)


document.querySelector("form").addEventListener("submit", ( event ) => {

    // prevenimos la actualización del sitio / CRUCIAL
    event.preventDefault()

    // PUSHEAMOS EL NUEVO DATO AL ARRAY
    tareas.push({
        nombreTarea: inputNombreTarea.value,
        tarea: inputTarea.value
    })

    // limpiamos el formulario
    document.querySelector("form").reset()
    console.log(tareas)

    // subimos al localStorage para preservar los datos de las tareas

    localStorage.setItem("tareas", JSON.stringify(tareas))

})