console.log("hola")

const form = document.querySelector("form")
console.log(form)

form.onsubmit = (e) => {
    e.preventDefault()

}

// UNA LIBRERÍA ES UNA SERIE DE FUNCIONALIDADES QUE PUEDE SER IMPLEMENTADA EN NUESTRO DESARROLLO, EN DONDE PODEMOS HACER USO DE SUS FACULTADES
// PARA PODER INCORPORAR UNA LIBRERÍA, DEBO LEER LA DOCUMENTACIÓN, ESPECÍFICAMENTE EL APARTADO INSTALACIÓN
// SI NO LA INCORPORO COMO LO INDICA LA DOCUMENTACIÓN, NO VOY A PODER HACER USO DE LA HERRAMIENTA

console.log(Swal)

// Swal.fire() invoca al método y lo ejecuta
// precisamos pasarle  argumentos para que sea funcional

// Swal.fire("Esto es un mensaje de prueba")

// podemos pasar argumentos separados con coma, que sean del tipo string y van a funcionar como títulos y subtítulos
// Swal.fire( titulo, subtitulo, icono)
// Los íconos disponibles se encuentran relacionados a los strings: warning, error, success, info, and question

// Swal.fire("Este es un título", "este es un subtítulo", "warning")

// podemos pasarle un objeto y a través de las diversas propiedades o planteadas por la documentación, facilitan la incorporación y estilización de diversas funcionalidades

// Swal.fire({
//     title: "Esta es una alerta con un objeto",
//     text: "Esta cadena representa a un texto breve.",
//     icon: "success",
//     footer: "Este es el pie del popup"
// })

// la funcionalidad estrella del sweet alert son las promesas, en donde dependiendo de la respuesta obtenida, se genera una acción en consecuencia

// Swal.fire({
//     title: '¿Desea guardar los cambios?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Guardar',
//     denyButtonText: `No guardar`,
//     cancelButtonText: "Cancelar"
// }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//         Swal.fire('Saved!', '', 'success')
//     } else if (result.isDenied) {
//         Swal.fire('Changes are not saved', '', 'info')
//     }
// })

// LIGAR SWAL A UN EVENTO DE CLICK

document.querySelector("#button-popup").onclick = () => {
    Swal.fire({
        title: "El psicópata me hizo click"
    })
}

// TOASTIFY JS
// es una librería que permite implementar notificaciones
// lo podemos hacer con una CDN ( script + link )

Toastify({
    text: "Le cambiamos el texto, hola!",
    duration: 1000,
    close: true,
    gravity: "bottom",
    position: "left",
    backgroundColor: "violet",
    onClick: () => {console.log("hizo click")}

}).showToast();

// SWIPER JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

// LUXON LIBRERÍA DE FECHAS


const DateTime = luxon.DateTime;

console.log(DateTime)

// instanciar una fecha

const fecha = DateTime.local()
console.log(fecha)

// podemos usar toSTring o toLocaleSTring para visualizar la fecha local 

console.log(fecha.toString())

console.log(fecha.toLocaleString())

// .now()
// muestra la hora actual

console.log(DateTime.now())

// para pasar una fecha específica

const fechaEspecifica = DateTime.local(1940, 5, 20 )

console.log(fechaEspecifica)

// podemos crear fechas a través de objetos

const fechaPorObjeto = DateTime.fromObject(
    {
        day: 29,
        hour: 14,
        month: 4

    },
    {
        zona: "America/Buenos_Aires",
        numberingStystem: "beng"
    }
)

console.log(fechaPorObjeto.toLocaleString())

// norma ISO

console.log(DateTime.fromISO("1995-04-12").toString())

// acceder a las fechas con los siguientes métodos

console.log(DateTime.now().year) // extraemos el año
console.log(DateTime.now().month) // mes
console.log(DateTime.now().day) // dia
console.log(DateTime.now().second) // segundos
console.log(DateTime.now().weekday) // día de la semana
console.log(DateTime.now().zoneName) // nombre de la zona
console.log(DateTime.now().daysInMonth) // días en un mes

// podemos visualizar diversos formatos de fecha

const fechaDehoy = DateTime.now()

console.log(fechaDehoy.toLocaleString(DateTime.DATE_SHORT)) // fecha corta

console.log(fechaDehoy.toLocaleString(DateTime.DATE_MED)) // fecha abreviada

console.log(fechaDehoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) // fecha y día abreviada

console.log(fechaDehoy.toLocaleString(DateTime.DATE_FULL)) // fecha completa

console.log(fechaDehoy.toLocaleString(DateTime.DATE_HUGE)) // fecha completa con día de la semana

console.log(fechaDehoy.toLocaleString(DateTime.DATE_SIMPLE)) //hora y minutos