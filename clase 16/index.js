//API
// INTERFAZ DE PROGRAMACIÓN DE APLICACIONES
// es un intermediario que nos permite relacionar a dos componentes o servicios y comunicarse entre sí
// permiten integrar funcionalidades, hacer envíos y peticiones de información

const url = `https://rickandmortyapi.com/api/character`

// fetch
// promesa que nos permite hacer peticiones o enviar información a un servidor
// este método es asincrónico
// fetch(URL, {})


// PETICIÓN HTTP CON EL VERBO GET
// cuando pasamos una URL sin el segundo argumento a fetch, se supone uqe la petición es GET

// VERBO GET: en una petición, significa que vamos a pedir recursos a través de una API a un servidor
// si pedimos recursos, simplemente el srevidor se encargará de responder, es decir, no necesitamos enviar información

// fetch(url)
// .then( respuesta => respuesta.json())
// .then( (informacion) => {
//     console.log(informacion)
//     cardsAHtml(informacion.results)
// })

// const cardsAHtml = data => {
//     const cards = data.reduce( ( acc, elemento ) => {
//         return acc + `
//             <div id="personaje-${elemento.id}">
//                 <div class="container-img">
//                     <img src=${ elemento.image } alt=${ elemento.name }>
//                 </div>              
//                 <h2>
//                     ${ elemento.name }
//                 </h2>  
//             </div>
//         `
//     }, "")

//     document.querySelector(".container").innerHTML = cards
// }

// PUEDO HACER LLAMADOS LOCALES A JSON

// fetch("MOCK_DATA.json")
// .then( res => res.json())
// .then( data => console.log(data))

// POST
// POST ME PERMITE ENCIAR INFORMACIÓN A UNA BASE DE DATOS
// COMO POR EJMEPLO: DAR DE ALTA UN USUARIO
// SE PRECISA QUE USEN LOS DOS ARGUMENTOS DE FETCH: LA URL Y EL OBJETO

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()   
    fetch("https://64e7e9d1b0fd9648b79065cc.mockapi.io/personas/alumnos", {
        method: "POST",
        body: JSON.stringify({
            createdAt: '2023-08-24T11:42:54.667Z', 
            name: "aslkdjsad", 
            nota: 6545, 
            id: '12'            
        }),
        headers: {
            "Content-Type":"apllication/json"
        }
    })
    .then( res => res.json())
    .then( data => console.log(data))
}


// PUT Y PATCH
// NOS PERMITE MODIFICAR LOS VALORES DE UN RECURSO PREEXISTENTE
// PUT REEMPLAZA EL VALOR POR COMPLETO
// PATCH MODIFICA SOLAMENTE UNA PARTE DE ESE RECURSO
// SE PRECISA ACLARAR EN LA REQUEST EL ID DEL VALOR A MODIFICAR

fetch("https://64e7e9d1b0fd9648b79065cc.mockapi.io/personas/alumnos/2", {
    method: "PUT",
    body: JSON.stringify({
        "createdAt": "2023-08-24T18:37:21.803Z",
        "name": "Ejajaj xd",
        "nota": 1,
        "id": "2"
    }),
    headers: {
        "Content-Type":"application/json"
    }
})
.then( res => res.json())
.then( data => console.log(data))
.catch(error => console.log(error))

// DELETE
// SE PRECISA ACLARAR EN LA REQUEST EL ID DEL VALOR A MODIFICAR
// BORRA UN RECURSO

fetch("https://64e7e9d1b0fd9648b79065cc.mockapi.io/personas/profe/3", {
    method: "DELETE"
})

// SUGAR SYNTAX PARA PETICIONES
// ASYNC AWAIT

const peticionApi = async () =>{
    const respuesta = await fetch("https://rickandmortyapi.com/api/episode")
    const data = await respuesta.json()
    console.log(data)
}

peticionApi()