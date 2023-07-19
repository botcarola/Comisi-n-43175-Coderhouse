// TENEMOS DOS FORMAS DE HACER FUNCIONES
// FUNCIONES POR DECLARACIÓN
// POR UTILIZAR LA PALABRA RESERVADA FUNCTION + IDENTIFICADOR + () + {}

saludar("sadsad")

function saludar ( nombre ) {
    console.log(`¡Hola ${nombre}!`)
}

// para ver los resultados, vamos a tener que llamar o invocar a la función

saludar("Michelle")
saludar("Matías")

// UNA FUNCIÓN POR EXPRESIÓN
// por ser funciones anónimas
// A DIFERENCIA DE LAS FUNCIONES POR DECLARACIÓN ,NO PUEDEN SER UTILIZADAS ANTES DE SU INICIALIZACIÓN

const saludarGritando = function ( nombre ) {
    console.log(`¡HOLA ${ nombre.toUpperCase() }!`)
}

saludarGritando("Mía")

// SINTAXIS SIMPLIFICADA ECMASCRIPT 6 / 2015
// arrow function

const suma = (a, b) => {
    return a + b
}

// sintaxis simplificada relativa a parámetros

const mostrarNombre = nombre => {
    return nombre
}

// sintaxis simplificada relativa al retorno (return implícito)

const validarEdad = edad => edad > 18 && "Puede pasar"

console.log(validarEdad(45))

validarEdad(49)
validarEdad(78)

// RETORNO EXPLÍCITO

const validarEdadExplicito = edad => {
    if ( edad > 18 ) {
        return "Puede pasar"
    } else {
        return "No puede pasar"
    }
}

// OBJETOS

// HASTA AHORA OPERAMOS CON DATOS PRIMITIVOS : number, string, boolean

// los objetos no son datos primitivos ( es decir simples), sino que son dentro de la categoría objetos, un dato compuesto



// const nombre = "Carola"
// const apellido = "LaLa"
// const domicilio = "Calle falsa 123"
// const colorFavorito = "terracota"
// const saborDeHeladoFavorito = "chocolate"

// SINTAXIS DE OBJETO
// OBJETO CUENTA CON PROPIEDADES ( clave: valor)
// estas propiedades se separan con coma
// el orden de estas propiedades no es relevante

const persona = {
    nombre: "Carola",
    apellido: "Lala",
    domicilio: "Calle falsa 123",
    colorFavorito: "Terracota"
}

console.log(typeof persona)
console.log(persona)

//  Hola [object Object]
console.log(`Hola ${persona}`)

// para poder ver un valor, debo utilizar la notación de punto
// esta notación de punto facilita los datos que contienen las propiedades de los objetos
// también los métodos

console.log(persona.apellido)
console.log(persona.nombre)
console.log(persona.colorFavorito)

// interpolación con la propiedad nombre del objeto persona

console.log(`Hola ${persona.nombre}`)

// OTRO OBJETO

const mesa = {
    patas: 4,
    material: "madera",
    color: "caoba",
    precio: 50000,
    ancho: 1.40,
    largo: 3,
    peso: 100,
    alto: 1.40
}

const materialMesa = mesa.material
console.log(materialMesa)

// LOS OBJETOS PUEDEN CONTENER DATOS SIMPLES (COMO NUMBER, BOOLEAN, STRING, ETC) Y TAMBIÉN OTROS OBJETOS Y ADEMÁS ARRAYS
// LOS OBJETOS PUEDEN CONTENER TODO TIPO DE DATO

const inventarioCarola = {
    lapiceras: 5,
    notebook: true,
    mascotas: ["Panka", "Hideo Kojima"],
    electronicos: {
        joystick: true,
        pizarraMagica: true
    },
    postit: true, 
    verificarInventario: function() {
        console.log(this.lapiceras)
    },
    verificarConFlecha: () => console.log(this.lapiceras)
}

// ACCEDER A UN VALOR OBJETO DENTR ODE UN OBJETO

console.log(inventarioCarola.electronicos.pizarraMagica)

// SI QUIERO LLAMAR A UN MÉTODO, LO HAGO DE LA SIGUIENTE MANERA
// NOTACIÓN DE PUNTO
// PROPIEDAD
// Y PARÉNTESIS

inventarioCarola.verificarInventario()
inventarioCarola.verificarConFlecha()

// COMO AÑADIR NUEVOS VALORES (PROPIEDAD: CLAVE/VALOR)

inventarioCarola.lapicero = true;

console.log(inventarioCarola)

inventarioCarola.escritorio = true;

inventarioCarola.cables= "un montón y todos desordenados"

inventarioCarola.cuadernos = 3

// PUEDO REASIGNAR EL VALOR DE PROPIEDADES ANTERIORES

// LAS PROPIEDADES DE UN OBJETO SON COMO UN LET Y PUEDO REASIRNAR EL VALOR DE SUS PROPIEDADES

inventarioCarola.lapiceras = 10

// PUEDO DELETEAR CONTENIDO DE UN OBJETO, ES DECIR SU PROPIEDADES (CLAVE: VALOR)

delete inventarioCarola.mascotas

////////////////////////////////////////////////

// CONSTRUCTOR 
// ES COMO UN MOLDE QUE PERMITE CREAR O INSTANCIAR MUCHOS OBJETOS CON LAS MISMAS CARACTERÍSTICAS

function Estudiante ( nombre, esEstudiante, calificacion ) {
    this.nombreEstudiante = nombre;
    this.estudiante = esEstudiante;
    this.calificacion = calificacion;
    this.mostrarCalificacion = function () {
        console.log(`La calificacion del estudiante es ${this.calificacion}`)
    }
}

const estudianteLucas = new Estudiante("Lucas", true, 10)

console.log(estudianteLucas)

const estudianteNico = new Estudiante("Nicolas", true, 10)

const estudianteProfe = new Estudiante("Carola", false, 0)

console.log(estudianteProfe)

// class constructor
// son equivalentes a una función constructora y pueden definir distintos tipos de métodos

class Ensalada {
    constructor ( ingrediente1, ingrediente2, ingrediente3, aderezo ) {
        this.ingrediente = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingrediente3 = ingrediente3;
        this.aderezo = aderezo;
    }
    hacerEnsalada() {
        console.log(`La ensalada es de: ${this.ingrediente}, ${this.ingrediente2}, ${this.ingrediente3} y tiene como aderezo ${this.aderezo}`)
    }
}

const ensaladaFavorita = new Ensalada("lechuga", "tomate", "zanahoria", "limón y sal")

ensaladaFavorita.hacerEnsalada()

console.log(ensaladaFavorita)

// OPERADOR IN
// me devuelve un true si encuentra cierta propiedad dentro de un objeto

console.log("aderezo" in ensaladaFavorita)
console.log("sjalksjdasd" in ensaladaFavorita)

// PASAR LA CLAVE DE UNA PROPIEDAD SIN COMILLAS, ME GENERA ERROR PORQUE JAVASCRIPT ASUME QUE ES UN IDENTIFICADOR

// console.log(aderezo in ensaladaFavorita)