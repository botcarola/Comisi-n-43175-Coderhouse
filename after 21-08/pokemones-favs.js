const pokemonesLs = JSON.parse(localStorage.getItem("pokemones"))
const containerCards = document.querySelector("div")

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

cardsAHtml(pokemonesLs)