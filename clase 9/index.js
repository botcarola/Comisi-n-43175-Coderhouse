//DOM: EL MODELO DE OBJETOS DEL DOCUMENTO
// DOCUMENT OBJECT MODEL
// ES UNA ESTRUCTURA DE OBJETOS GENERADA POR EL NAVEGADOR
// EL NAVEGADOR NOS PERMITE ACCEDER A ESTOS OBJETOS A TRAVÉS DE document

console.log(document)

//podemos hacer uso de métodos, que se dan a partir de document, es decir, no los podemos usar solos, para tener acceso específico a un nodo o conjunto de nodos

// document.getElementById
// me permite obtener un elemento por su ID
// siempre devuelve un único elemento
// se le pasa de argumento un id
// SIEMPRE DEVUELVE LA PRIMER COINCIDENCIA
// NO SE ACONSEJA USAR ID COMO ESTILOS EN ELEMENTOS HTML
// si no existe, devuelve null

const container = document.getElementById("contenedor")

console.log(container)

// document.getElementsByTagName
// llama a todos los elementos que coincidan con el nombre de etiqueta
// estamos hablando de una htmlcollection
// se le pasa como argumento el nombre de etiqueta que querramos colectar
// no es un array aunque tenga índice y length
// al no ser un array, no pueden ser aplicados métodos de arrays

const contenedores = document.getElementsByTagName("div")

console.log(contenedores)

// prueba viviente de que no acepta métodos de arrays

console.log( typeof contenedores)

// for ( let i = 0; i < contenedores.length; i++) {
//     console.log(contenedores[i])
//     contenedores[i].textContent = "jijiji"
// }

// puedo acceder a los elementos de esta htmlcollection con los corchetes, pasando el índice del elemento

// contenedores[3].textContent = "sarasa"

// document.getElementsByClassName
// llaman a todos los elementos que coincidan con una clase
// son una htmlcollection
// siempre van a ser una htmlcollection, es decir, aunque haya un solo elemento con una clase específica
// tienen índice y length
// se pueden recorrer con un for
// llaman a los elementos con más especificidad que con el TagName

const contenedoresPorClase = document.getElementsByClassName("caja")

// PODEMOS LLAMAR A LOS NODOS POR SUS SELECTORES
// TENEMOS SELECTORES DE ETIQUETA, CLASE, IDENTIFICADOR, ETC
// document.querySelector
// le pasamos como argumento, el nombre de la etiqueta, la clase con punto ej: .caja o el identificador con su numeral ej: #contenedor
// si no encuentra nada, retorna null
// sino, retorna el primer elemento que coincida
// querySelector solo retorna un elemento

// ej de llamar a un elemento por su etiqueta

const main = document.querySelector("main")
console.log(main)

// ejemplo de llamar a un elemento por su clase

const cajaComentario = document.querySelector(".comentario")
console.log(cajaComentario)

// ejemplo de llamar a un elemento por su id

const cajaPorId = document.querySelector("#contenedor-5")
console.log(cajaPorId)

// TAMBIÉN PODEMOS USAR EL PLURAL Y LLAMAR A TODOS LOS ELEMENTOS QUE COINCIDAN CON LOS SELECTORES
// document.querySelectorAll
// trae todos los elementos que coincidan con un selector
// el prototype es nodeList
// acepta el método forEach

const todosLosDivs = document.querySelectorAll("div")
todosLosDivs.forEach( element => console.log(element))

// verificar contenido de un nodo

const parrafo = document.querySelector("p")
console.log(parrafo.textContent)

// los nodos son un objeto, tienen métodos y propiedades ligados a sí mismos

console.log(typeof parrafo)

// acceder al valor de su ID

console.log(parrafo.id)

// acceder a su nombre de clase

console.log(parrafo.className)

 // se puede sobreescribir clase

parrafo.className = "sarasa2"
console.log(parrafo)

//añadir clase nueva sin sobreescribir la anterior

parrafo.classList.add("asdsaddas")

