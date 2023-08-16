// ### Puntos de tarea para trabajar con datos de usuarios y crear tarjetas en JavaScript utilizando la variable `mockdata`:
// EL PUNTO 7 Y 8 LO HACEMOS EN CLASE EL MARTES

// 1. **Mostrar Datos Iniciales:**
//    - Accede a la variable `mockdata` en tu archivo JavaScript y muestra su contenido en la consola para verificar que los datos estén disponibles.

// 2. **Recorrer el Array de Usuarios:**
//    - Utiliza un bucle `for` o `forEach` para recorrer el array de usuarios (`mockdata`).
//    - Por cada usuario, imprime su información completa en la consola.

// 3. **Crear Tarjetas de Usuario:**
//    - Crea un contenedor en tu HTML donde se mostrarán las tarjetas de usuario.
//    - Utiliza JavaScript para recorrer el array de usuarios (`mockdata`) y crear tarjetas individuales para cada usuario.
//    - Cada tarjeta debe mostrar el nombre completo, país y número de teléfono del usuario.

// 4. **Manejo de Datos Nulos:**
//    - Modifica el bucle de creación de tarjetas para verificar si alguna propiedad está nula en el objeto usuario.
//    - Si una propiedad está nula, muestra en su lugar el mensaje "No disponible".

// 5. **Estilo de Tarjetas:**
//    - Agrega estilos CSS para que las tarjetas de usuario sean visualmente atractivas.
//    - Asegúrate de que las tarjetas tengan un diseño limpio y legible.

// 6. **Detalles Adicionales en Tarjetas:**
//    - Agrega más detalles a las tarjetas, como la dirección de correo electrónico y el nick del usuario en el sitio.
//    - Utiliza clases de CSS para organizar la información en las tarjetas.

// 7. **Filtrar Usuarios por Género:**
//    - Agrega un botón en tu página que permita al usuario filtrar los usuarios por género (por ejemplo, masculino o femenino).
//    - Implementa la funcionalidad para mostrar solo las tarjetas de usuario que coincidan con el género seleccionado.

// 8. **Búsqueda de Usuarios por Nombre:**
//    - Agrega un campo de búsqueda que permita al usuario buscar usuarios por su nombre.
//    - Implementa la funcionalidad para mostrar las tarjetas de usuario cuyos nombres coincidan con la búsqueda.

// 9. **Mejoras Visuales:**
//    - Implementa transiciones suaves al mostrar u ocultar las tarjetas de usuario al aplicar filtros o búsquedas.
//    - Añade efectos visuales para resaltar la tarjeta cuando el usuario pase el cursor sobre ella.

// 10. **Responsive Design:**
//     - Asegúrate de que las tarjetas de usuario y la página en general se vean bien en dispositivos móviles y pantallas de diferentes tamaños.

// 1) ALMACENÉ EN UNA VARIABLE EL NODO DE HTML QUE CONTENDRÁ A TODOS MIS NODOS GENERADOS DESDE JS

const table = document.querySelector("#tabla-users")

// 2) HACER LAS TARJETAS

const cards = array => {
    const data =  array.reduce(( acc, element ) => {
    return acc + `
        <tbody class="body-tabla">
            <tr>
                <td>
                    ${element.first_name} ${element.last_name}
                </td> 
                <td>
                    ${element.email} 
                </td>   
                <td>
                    ${element.gender || "None"}
                </td>  
                <td>
                    ${element.app_name} 
                </td>  
                <td>
                    ${element.country || "None"} 
                </td>  
                <td>
                    ${element.phone} 
                </td>  
                <td>
                    ${element.street_address}
                </td>
            </tr>
        </tbody>
    `
}, `
    <thead>
        <tr>
            <th>
                Full Name
            </th>
            <th>
                Email
            </th>
            <th>
                Gender
            </th>
            <th>
                Nickname
            </th>
            <th>
                Country
            </th>
            <th>
                Phone
            </th>
            <th>
                Street address
            </th>
        </tr>
    </thead>
`)

table.innerHTML = data
}

cards(mockdata)


// llamar al selector para escuchar los cambios de los géneros

const selectorGenero = document.querySelector("#select-genero")

console.log(selectorGenero)

const filtrarPorGenero = ( genero, array ) => {
    return array.filter( element => {
        return element.gender && genero === element.gender 
    })
}

const filtrarGeneroPorNulo = ( array ) => {
    return array.filter( element => {       
        return element.gender === null
    })
}

selectorGenero.addEventListener("change", (e) => {
    console.log(e.target.value) // me muestra el valor del input

    if ( e.target.value === "all" ) {
        cards(mockdata)
    } else if ( e.target.value === "null" ) {
        cards(filtrarGeneroPorNulo(mockdata))
    } else {
        cards(filtrarPorGenero(e.target.value, mockdata))  
    }
})

// BÚSQUEDA POR NOMBRE

const formBusquedaNombre = document.querySelector("#form-busqueda-nombre")
const inputBusquedaNombre = document.querySelector("#input-nombre")

const buscarUsuario = ( array, busqueda ) => {
    return array.find( persona => {
        const concatenarNombres = `${persona.first_name} ${persona.last_name}`
        return concatenarNombres === busqueda
    })
}

formBusquedaNombre.onsubmit = (e) => {
    e.preventDefault()
    
    if ( inputBusquedaNombre.value !== "" && inputBusquedaNombre.value !== null && inputBusquedaNombre.value !== undefined) {
        const persona = buscarUsuario(mockdata, inputBusquedaNombre.value)

        if ( persona !== undefined ) {

            alert(`La búsqueda de ${persona.first_name} ${persona.last_name} fue exitoso y trajo los siguientes datos: ${persona.street_address}`)
        }
    }    
}