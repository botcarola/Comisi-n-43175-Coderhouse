console.log(pokemon)

const containerCards = document.querySelector(".container-cards")

const cardsAHtml = array => {

    // generar la lógica que desarrolle las tarjetas (nodos html)

    const cards = array.reduce((acc, element) => {
        return acc + `
        <div class="card" id="card-${element.id}">
            <button class="button-card" id="button-${element.id}">
                <i class="fa-solid fa-star"></i>
            </button>       
            <h2>
                ${element.name}
            </h2>
            <figure class="container-card">
                <img src=${element.img || "not-found.jpg"} alt="imagen del pokemon ${element.name}">
            </figure>
            <h4>
                Type: ${element.type.join(" - ")}
            </h4>
            <h4>
                Weaknesses: ${element.weaknesses.join(" - ")}
            </h4> 
        </div>
    `
    }, "")

    // generar que se impacten estas tarjetas en el DOM con innerHTML
    containerCards.innerHTML = cards

}

cardsAHtml(pokemon)


// procedo a llamar a todas las tarjetas que hice

const allCards = document.querySelectorAll(".button-card")
// console.log(allCards)

// array vacío para pushear objetos y subirlos al LS

let pokemonesFavoritos = []

// ligo el evento a la nodelist
// 1) funcion que me permita recorrer los nodos

// const eventoCards = ( nodos, array ) => {

//     for ( let i = 0; i < nodos.length; i++ ) {

//         nodos[i].onclick = (e) => {                               
//             const id = e.currentTarget.id.slice(7)
//             const buscarPokemon = array.find( element => element.id === Number(id))
//             pokemonesFavoritos.push(buscarPokemon)
//             localStorage.setItem("pokemones", JSON.stringify(pokemonesFavoritos))
//             Toastify({
//                 text: `Se ha añadido a ${ buscarPokemon.name } a favoritos.`,
//                 className: "info",
//                 style: {
//                     background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 }
//             }).showToast();
//         }
//     }
// }

// eventoCards(allCards, pokemon)


// SEGUNDA FORMA CON EVENTOS DE BUSCAR LOS OBJETOS

document.body.onclick = (e) => {
    if (e.target.classList.contains("button-card")) {       
        const id = e.target.id.slice(7)
        const buscarPokemon = pokemon.find(element => element.id === Number(id))
        pokemonesFavoritos.push(buscarPokemon)
        localStorage.setItem("pokemones", JSON.stringify(pokemonesFavoritos))
        Toastify({
            text: `Se ha añadido a ${buscarPokemon.name} a favoritos.`,
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
}