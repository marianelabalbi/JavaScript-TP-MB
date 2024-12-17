window.onload = () => { // página esté completamente cargado antes de ejecutar tu código
// Este bloque de código define que la función anónima contenida dentro de window.onload se ejecutará solo después de que toda la página (HTML, CSS, etc.) haya cargado completamente.
 
/** Atajo para document.querySelector */
const $ = (selector) => document.querySelector(selector)
// Define una función llamada $ que actúa como un atajo para document.querySelector. Esto hace que seleccionar elementos del DOM sea más rápido y con menos código. 


// ***************************************************
//                   DESCARGAR MEME
// ***************************************************


const descargarMeme = () => {
  domtoimage.toBlob($("#canvas-meme")).then((blob) => {
    saveAs(blob, "mi-meme.png")
  })
}
// Usa la librería dom-to-image para convertir el elemento con el ID canvas-meme a una imagen en formato Blob.
// Luego, usa saveAs (probablemente de la librería FileSaver.js) para descargar esa imagen con el nombre mi-meme.png.


// ***************************************************
//                   TEMA CLARO - OSCURO
// ***************************************************

// Cambia al modo oscuro
const cambiarModoOscuro = () => {
  document.body.classList.remove("modo-claro")
  document.body.classList.add("modo-oscuro")
}

// Cambia al modo claro
const cambiarModoClaro = () => {
  document.body.classList.remove("modo-oscuro")
  document.body.classList.add("modo-claro")
}

// Inicializa eventos
const inicializar = () => {
  $("#boton-tema-oscuro").addEventListener("click", cambiarModoClaro)
  $("#boton-tema-claro").addEventListener("click", cambiarModoOscuro)
  $("#boton-descargar-meme").addEventListener("click", descargarMeme)
}

// ***************************************************
//                   IMAGEN
// ***************************************************

/** Carga imagen **/
const urlInput = $('#url-img-input')
const imagenMeme = $('#imagen-meme')

urlInput.addEventListener('input', () => {
  const url = urlInput.value
  imagenMeme.style.backgroundImage = `url(${url})`
  imagenMeme.style.backgroundSize = 'cover' // Para que la imagen se ajuste
  imagenMeme.style.backgroundPosition = 'center' // Centra la imagen
})

/** Actualiza Color Fondo **/
const actualizarFondo = () => {
  const colorFondo = $("#mezcla-color-input").value
  const modoMezcla = $("#mezcla-color-selector").value  
  const imagenMeme = $("#imagen-meme")
  imagenMeme.style.backgroundColor = colorFondo // Aplica el color
  imagenMeme.style.backgroundBlendMode = modoMezcla // Aplica el modo de mezcla
}

$("#mezcla-color-input")
$("#input", actualizarFondo)
$("#mezcla-color-selector")
document.addEventListener("change", actualizarFondo)

 /** FONFO TRANSPARENTE Función para actualizar el fondo de texto a transparente **/    
const actualizarFondoTexto = () => {
  const transparente = $("#texto-transparente-checkbox").checked
  const textoSuperior = $("#texto-superior")
  const textoInferior = $("#texto-inferior")
  const colorFondo = $("#texto-bg-color-input").value  // Obtener el valor del input de color

  if (transparente) {
    textoSuperior.style.backgroundColor = "transparent"
    textoInferior.style.backgroundColor = "transparent"
  } else {
    textoSuperior.style.backgroundColor = colorFondo
    textoInferior.style.backgroundColor = colorFondo
  }
}
$("#texto-transparente-checkbox").addEventListener("change", actualizarFondoTexto)


/** Aplicar Filtros **/  
const aplicarFiltros = () => {
  const brillo = $("#deslizante-brillo").value
  const opacidad = $("#deslizante-opacidad").value
  const contraste = $("#deslizante-contraste").value
  const saturacion = $("#deslizante-saturacion").value
  const desenfoque = $("#deslizante-desenfoque").value
  const escalaGrises = $("#deslizante-grises").value
  const sepia = $("#deslizante-sepia").value
  const hue = $("#deslizante-hue").value
  const negativo = $("#deslizante-negativo").value

const filtros = `
  brightness(${brillo})
  opacity(${opacidad})
  contrast(${contraste}%)
  saturate(${saturacion}%)
  blur(${desenfoque}px)
  grayscale(${escalaGrises}%)
  sepia(${sepia}%)
  hue-rotate(${hue}deg)
  invert(${negativo})
    `
$("#imagen-meme").style.filter = filtros
  }
  
// Asigna eventos a los sliders
const sliders = document.querySelectorAll("input[type='range']")
  sliders.forEach((slider) => {
    slider.addEventListener("input", aplicarFiltros)
  })

/** Restablecer Filtros **/  
const restablecerFiltros = () => {
  $("#deslizante-brillo").value = 1
  $("#deslizante-opacidad").value = 1
  $("#deslizante-contraste").value = 100
  $("#deslizante-saturacion").value = 100
  $("#deslizante-desenfoque").value = 0
  $("#deslizante-grises").value = 0
  $("#deslizante-sepia").value = 0
  $("#deslizante-hue").value = 0
  $("#deslizante-negativo").value = 0
  aplicarFiltros();
}

$("#boton-estandar-restablecer-filtros").addEventListener("click", restablecerFiltros)

// ***************************************************
//                  TEXTO
// ***************************************************

/** TEXTO SUPERIOR Función para actualizar el texto superior **/  
const actualizarTextoSuperior = () => {
  const inputTextoSuperior = $("#texto-superior-input").value
  const textoSuperior = $("#texto-superior")
  textoSuperior.textContent = inputTextoSuperior // Actualiza el texto
  }
  
$("#texto-superior-input") .addEventListener("input", actualizarTextoSuperior)


/** Función para mostrar u ocultar el texto superior **/   
const toggleTextoSuperior = () => {
  const checkbox = $("#no-texto-superior-checkbox").checked
  const textoSuperior = $("#texto-superior")
  textoSuperior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}
  
$("#no-texto-superior-checkbox") .addEventListener("change", toggleTextoSuperior)


/** TEXTO INFERIOR función para actualizar el texto inferior **/   
const actualizarTextoInferior = () => {
  const inputTextoInferior = $("#texto-inferior-input").value
  const textoInferior = $("#texto-inferior")
  textoInferior.textContent = inputTextoInferior // Actualiza el texto
}
  
$("#texto-inferior-input") .addEventListener("input", actualizarTextoInferior)

/** Función para mostrar u ocultar el texto inferior **/    
const toggleTextoInferior = () => {
  const checkbox = $("#no-texto-inferior-checkbox").checked
  const textoInferior = $("#texto-inferior")
  textoInferior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}

$("#no-texto-inferior-checkbox") .addEventListener("change", toggleTextoInferior)

/** ESTILOS DE TEXTO Función para actualizar estilos de texto **/   
const actualizarEstilosTexto = () => {
  const fuente = $("#texto-fuente-seleccion").value
  const tamanio = $("#texto-tamanio-input").value + "px"
  const color = $("#texto-color-input").value
  const fondoColor = $("#texto-bg-color-input").value
  const textos = [$("#texto-superior"), $("#texto-inferior")]
  textos.forEach((texto) => {
    texto.style.fontFamily = fuente
    texto.style.fontSize = tamanio
    texto.style.color = color
    texto.style.backgroundColor = fondoColor
  })
}

$("#texto-fuente-seleccion").addEventListener("change", actualizarEstilosTexto)
$("#texto-tamanio-input").addEventListener("input", actualizarEstilosTexto)
$("#texto-color-input").addEventListener("input", actualizarEstilosTexto)
$("#texto-bg-color-input").addEventListener("input", actualizarEstilosTexto)

/** ALINEACION DE TEXTO Función para actualizar la alineacion de texto **/   
const alinearTexto = (alineacion) => {
  const textos = [$("#texto-superior"), $("#texto-inferior")]
  textos.forEach((texto) => {
    texto.style.textAlign = alineacion
  })
}

$("#boton-alineacion-izquierda").addEventListener("click", () => alinearTexto("left"))
$("#boton-alineacion-centrada").addEventListener("click", () => alinearTexto("center"))
$("#boton-alineacion-derecha").addEventListener("click", () => alinearTexto("right"))

/** CONTORNO DE TEXTO Función para actualizar el contorno de texto **/   
const aplicarContornoTexto = (tipoContorno) => {
  const textos = [
    $("#texto-superior"),
    $("#texto-inferior"),
  ]

  textos.forEach((texto) => {
    if (tipoContorno === "ninguno") {
      texto.style.webkitTextStroke = "0px" // Sin contorno
    } else if (tipoContorno === "claro") {
      texto.style.webkitTextStroke = "1px white" // Contorno blanco
    } else if (tipoContorno === "oscuro") {
      texto.style.webkitTextStroke = "1px black" // Contorno negro
    }
  })
}

$("#boton-texto-no-linea").addEventListener("click", () => aplicarContornoTexto("ninguno"))
$("#boton-texto-linea-claro") .addEventListener("click", () => aplicarContornoTexto("claro"))
$("#boton-texto-linea-oscuro") .addEventListener("click", () => aplicarContornoTexto("oscuro"))

/** ESPACIADO DE TEXTO Función para actualizar el espacio de texto **/  
const actualizarEspaciado = () => {
  const espaciado = $("#espaciado-input").value
  $("#texto-superior").style.padding = `${espaciado}px 50px`
  $("#texto-inferior").style.padding = `${espaciado}px 50px`
}

$("#espaciado-input") .addEventListener("input", actualizarEspaciado)

/** INTERLINEADO DE TEXTO Función para actualizar el interlineado de texto **/  
const actualizarInterlineado = () => {
  const interlineado = $("#interlineado-input").value
  $("#texto-superior").style.lineHeight = interlineado
  $("#texto-inferior").style.lineHeight = interlineado
}

$("#interlineado-input") .addEventListener("change", actualizarInterlineado)

// ***************************************************
//                 ASIDE -  PANELES
// ***************************************************
  
// Obtener referencias de los elementos
const botonImg = $("#panel-img-boton")
const botonTexto = $("#panel-texto-boton")
const panel = $("#panel")
const panelImg = $("#panel-img")
const panelText = $("#panel-texto")
const botonCerrar = $("#panel-boton-cerrar")
  
// Mostrar el panel de imagen
botonImg.addEventListener("click", () => {
  panel.classList.remove("panel-oculto")
  panelImg.classList.remove("oculto")
  panelText.classList.add("oculto")
})
  
// Mostrar el panel de texto
botonTexto.addEventListener("click", () => {
  panel.classList.remove("panel-oculto")
  panelText.classList.remove("oculto")
  panelImg.classList.add("oculto")
})

// Cerrar el panel
botonCerrar.addEventListener("click", () => {
  panel.classList.add("panel-oculto")
})
  
// Iniciar cuando el DOM esté cargado
inicializar()

} // cierra window.onload 
  

  
  