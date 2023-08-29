// request: realizar petición a base de datos
const container = document.querySelector(".container")
const containerFavoritos = document.querySelector(".container-favoritos")
const episodiosFavoritos = JSON.parse(localStorage.getItem("episodiosFavoritos")) || []


const cardsAHtml = (array, contenedor) => {
    const nodos = array.reduce(( acc, element ) => {
        return acc + `
            <div class="card">
                <h3>
                    ${ element.name}
                    <span>
                        ${ element.episode }
                    </span>
                </h3>
                <h4>
                    ${ element.air_date }
                </h4>
                <button class="button-fav" id="fav-${ element.id }">
                    Añadir a favoritos
                </button>
            </div>
        `
    },"")

    contenedor.innerHTML = nodos 
}

cardsAHtml(episodiosFavoritos, containerFavoritos)
console.log(episodiosFavoritos)

const agregarAFavoritos = array => {
    // al hacer el llamado de los nodos y la invocación del a función dentro del then, puedo interactuar con las tarjetas creadas de manera asíncrona
    const cards = document.querySelectorAll(".button-fav")

    for( let i = 0; i < cards.length; i++ ) {
        cards[i].onclick = (e) => {            
            const id = e.target.id.slice(4)
            const buscarDato = array.find( element => element.id === Number(id))
            episodiosFavoritos.push(buscarDato)
            localStorage.setItem("episodiosFavoritos", JSON.stringify(episodiosFavoritos))
            cardsAHtml(episodiosFavoritos, containerFavoritos)
        }
    }
   
}

const removerDeFavoritos = array => {
    // 0 = INVOCAR ESTA FUNCIÓN DENTRO DEL THEN, DESPUÉS DE AGREGARAFAVORITOS
    //1 = DEBERÍAN AGREGAR UN BOTÓN QUE PUEDA REMOVER
    // 2= ESTE BOTÓN TIENE QUE TENER EL ID COMO EL BOTÓN DE LOS FAVORITOS
    // 3= LLAMAR A TODOS LOS BOTONES DESDE LA FUNCIÓN
    // 4= HACER UN FOR QUE RECORRA TODOS LOS BOTONES DE ELIMINAR
    // 5 = LIGAR UN EVENTO QUE ESCUCHE LOS CLICKS
    // 6= TOMAR EL ID DEL BOTÓN AL CUAL SE LE HIZO CLICK Y BUSCAR EL OBJETO DEL ARRAY QUE COINCIDA CON EL ID DLE BOTÓN
    // 7 = FILTRAR EN EL ARRAY DE episodiosFavoritos EL OBJETO QUE QUEREMOS ELIMIANR (QUE DEVUEVLA TODOS LOS RESULTADOS MENOS EL OBJETO QUE SE QUIERA ELIMINAR)
    // 8 = VOLVER A ENVIAR EL ARRAY DE OBJETOS AL LOCALSTORAGE -CON LOS DATOS EN STRINGIFY
    // 9 = reconstruir el DOM
}

fetch("https://rickandmortyapi.com/api/episode")
.then( response => response.json())
.then( data => {
    console.log(data)
    cardsAHtml(data.results, container)
    agregarAFavoritos(data.results)
})
.catch(() => console.log("error en la request"))

// NO SE PUEDE ACCEDER A LAS CARDS ANTES DEL THEN, PORQUE AÚN NO HAN SIDO CREADAS
// DA UN NODELIST VACÍO

// const cards = document.querySelectorAll(".card")
// console.log(cards)