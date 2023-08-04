// // a través de la palabra reservada document, podemos acceder al árbol de nodos (DOM)

// console.log(document)

// // almaceno en una variable el nodo relativo a un botón

// const buttonClick = document.querySelector("#click-boton")
// console.log(buttonClick)

// // cuando queremos escuchar determinada acción sobre nuestra página, podemos hacer uso de los eventos. Los eventos no son otra cosa que la escucha de algo que sucedió y en consecuencia la ejecución de un "manipulador" (que es una función - callback -), que generará una respuesta ante la ejecución de este evento.

// // addEventListener = añadir escucha de evento
// // recibe dos argumentos:
// // es el tipo de escucha, ahora vamos a usar click
// // es el callabck (manipulador) qei se ejecutará

// buttonClick.addEventListener("click", () => {
//     console.log("Me hacen click")
// })

// console.log("ESTO ESTÁ DESPUÉS DEL ADDEVENTLISTENER")

// // a través de los eventos, puedo afectar a otros elementos del DOM


// const caja = document.querySelector(".caja")
// console.log(caja.style)

// buttonClick.addEventListener("click", () => {

//     caja.style.backgroundColor = "#0000ff"

//     console.log(caja.style)
// })

// // TOGGLE PARA MODIFICAR ELEMENTOS A TRAVÉS DE CLASES

// caja.addEventListener("click", () => {

//     console.log("me están haciendo click")
//     caja.classList.toggle("caja-verde")

// })

// // mouseover: escucha cuando el puntero entra dentro de la caja

// document.querySelector(".otra-caja-roja").onmouseover = () => {
//     console.log("está dentro de la caja")
// }

// // mousedown: escucha todos los clicks que se produzcan sobre el elemento
// // si le paso el parámetro event a un callback manipulador de eventos, obtengo informaciób sobre el evento desencadenado

// document.querySelector(".otra-caja-rosa").onmousedown = ( event ) => {
//     console.log("me hacen click")
//     console.log(event) // me proporciona información del evento
//     console.log(event.target) // me dice quién lo disparó
// }

// LOS FORMULARIOS TIENEN EVENTOS DE ESCUCHA QUE SON ESPECÍFICOS Y PARTICULARES DE SUS CAMPOS

const inputNombre = document.querySelector("#input-nombre")
const inputApellido = document.querySelector("#input-apellido")

console.log(inputNombre, inputApellido)

// el evento oninput escucha cada una de las interacciones que se escribe sobre el input

inputNombre.oninput = () => {
    
    // console.log(inputNombre.value) // muestra el valor que se generó dentro del campo
    document.querySelector("p").textContent = inputNombre.value
}

// el evento onchange escucha caudno se realiza el cambio del valor de un input, al salir del campo

inputApellido.onchange = (e) => {
    // console.log(inputApellido.value)
    console.log(e.target.value)
}

// submit --> evento que se ocupa de enviar el formulario

// document.querySelector("form").addEventListener("submit", () => {})

let clientes = []

document.querySelector("form").onsubmit = ( event ) => {
    event.preventDefault()
    console.log("formulario enviado")
    

    clientes.push({
        nombre: inputNombre.value,
        apellido: inputApellido.value
    })
    document.querySelector("form").reset()

    console.log(clientes)

    clientes.map(( elemento ) => console.log(elemento.nombre) )
}

// clientes.map(( elemento ) => console.log(elemento.nombre) )
