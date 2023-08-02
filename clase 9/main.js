console.log(pokemon)

const cards = pokemon.reduce(( acc, item ) => {
    return acc + `
        <div class="card" id="pokemon-${item.id}">
            <h2>
                ${ item.name }
            </h2>
            <div class="container-img">
                <img src=${item.img} alt=${item.name}>
            </div>
        </div>
    `
}, "")

console.log(cards)

const cardContainer = document.querySelector(".card-container")
console.log(cardContainer)

// método que me permite insertar nuevos nodos en un nodo padre
// precisa si o si de un elemento que oficie como caja de otros elementos
// no se pueden insertar nodos en la nada misma, siempre van a ser hijos de alguien

cardContainer.innerHTML = cards