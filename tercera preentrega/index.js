// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "tarjeta_grafica.jpg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "monitor.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "ssd.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "procesador.jpg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "mouse.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "ram.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "disco_externo.jpg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "auriculares.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// **Actividad 2: Página de Información sobre Pokémon**

// 1. **Objetivo**: Construir una página que muestre información sobre diferentes Pokémon y permita explorar sus detalles.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "pokemon-container" donde se mostrará la información de los Pokémon.

//    b. En un archivo JavaScript, crea un array de objetos con 10 Pokémon.

//    c. Escribe una función llamada `generarInfoPokemon` que reciba el array de datos de Pokémon como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML que muestren los detalles de cada Pokémon. Dentro de cada una de las tarjetas, tiene que haber un botón con un ícono de estrella. Estilízalos mínimamente. 

//    d. Inserta estos nodos en el contenedor del punto a con innerHTML. 

//    e. Al hacer click sobre el botón de una tarjeta, los datos de ese pokemon deben ser almacenados en el localStorage. 

const pokemonData = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        debilidad: ["Tierra"],
        habilidades: ["Impactrueno", "Rayo", "Electrocañón"]
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo: ["Fuego"],
        debilidad: ["Agua", "Roca"],
        habilidades: ["Lanzallamas", "Garra Dragón", "Giro Fuego"]
    },
    {
        id: 3,
        nombre: "Squirtle",
        tipo: ["Agua"],
        debilidad: ["Eléctrico", "Planta"],
        habilidades: ["Hidrobomba", "Pistola Agua", "Rayo Burbuja"]
    },
    {
        id: 4,
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        debilidad: ["Fuego", "Volador", "Psíquico", "Hielo"],
        habilidades: ["Latigazo", "Hoja Afilada", "Planta Feroz"]
    },
    {
        id: 5,
        nombre: "Jigglypuff",
        tipo: ["Normal", "Hada"],
        debilidad: ["Acero", "Veneno"],
        habilidades: ["Canto", "Desarme", "Ataque Doble"]
    },
    {
        id: 6,
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        debilidad: ["Agua", "Planta", "Hielo", "Lucha", "Acero"],
        habilidades: ["Lanzarrocas", "Roca Afilada", "Terremoto"]
    },
    {
        id: 7,
        nombre: "Machop",
        tipo: ["Lucha"],
        debilidad: ["Psíquico", "Volador", "Hada"],
        habilidades: ["Karate", "Golpe Bajo", "Puño Fuego"]
    },
    {
        id: 8,
        nombre: "Gastly",
        tipo: ["Fantasma", "Veneno"],
        debilidad: ["Fantasma", "Siniestro"],
        habilidades: ["Hipnosis", "Tinieblas", "Bola Sombra"]
    },
    {
        id: 9,
        nombre: "Dratini",
        tipo: ["Dragón"],
        debilidad: ["Hada", "Hielo"],
        habilidades: ["Cola Dragón", "Pulso Dragón", "Onda Trueno"]
    },
    {
        id: 10,
        nombre: "Eevee",
        tipo: ["Normal"],
        debilidad: ["Lucha"],
        habilidades: ["Mordisco", "Ataque Rápido", "Refuerzo"]
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// **Actividad 3: Blog como Facebook**

// 1. **Objetivo**: Crear una página estilo blog donde los usuarios puedan ver publicaciones y cambiar entre modos de visualización.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "publicaciones-container" donde se mostrarán las publicaciones.

//    b. En un archivo JavaScript, crea un array de objetos con 10 publicaciones. 

//    c. Escribe una función llamada `generarPublicaciones` que reciba el array de publicaciones como argumento. Dentro de esta función, utiliza un bucle para crear elementos HTML que muestren las publicaciones, estilízalos mínimamente.

//    d. Agrega un botón con el id "modo-oscuro" que, al hacer clic, cambie el fondo del sitio y guarde la preferencia en el almacenamiento local.

const publicaciones = [
    {
        id: 1,
        contenido: "¡Nuevo artículo en el blog!",
        imagen: "imagen1.jpg",
        fechaDePublicacion: "2023-08-16",
        nickDelUsuario: "user123",
    },
    {
        id: 2,
        contenido: "Recuerdos de las vacaciones",
        imagen: null,
        fechaDePublicacion: "2023-08-15",
        nickDelUsuario: "traveler99",
    },
    {
        id: 3,
        contenido: "¡Felicidades en tu cumpleaños!",
        imagen: "imagen3.jpg",
        fechaDePublicacion: "2023-08-14",
        nickDelUsuario: "birthdayWishes",
    },
    {
        id: 4,
        contenido: null,
        imagen: "imagen4.jpg",
        fechaDePublicacion: "2023-08-13",
        nickDelUsuario: "photoEnthusiast",
    },
    {
        id: 5,
        contenido: "Compartiendo una receta deliciosa",
        imagen: "imagen5.jpg",
        fechaDePublicacion: "2023-08-12",
        nickDelUsuario: "foodieCook",
    },
    {
        id: 6,
        contenido: "Explorando nuevos lugares",
        imagen: "imagen6.jpg",
        fechaDePublicacion: "2023-08-11",
        nickDelUsuario: "adventurerTravel",
    },
    {
        id: 7,
        contenido: "¡Concierto increíble anoche!",
        imagen: null,
        fechaDePublicacion: "2023-08-10",
        nickDelUsuario: "musicLover",
    },
    {
        id: 8,
        contenido: "Nueva adquisición para la colección",
        imagen: "imagen8.jpg",
        fechaDePublicacion: "2023-08-09",
        nickDelUsuario: "collector123",
    },
    {
        id: 9,
        contenido: "Disfrutando de un día soleado",
        imagen: "imagen9.jpg",
        fechaDePublicacion: "2023-08-08",
        nickDelUsuario: "outdoorExplorer",
    },
    {
        id: 10,
        contenido: "Reflexiones sobre la vida",
        imagen: null,
        fechaDePublicacion: "2023-08-07",
        nickDelUsuario: "deepThinker",
    },
];
