window.onload = () => { // para asegurarte de que todo en tu página esté completamente cargado antes de ejecutar tu código
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

// Cambiar al modo oscuro
const cambiarModoOscuro = () => {
  document.body.classList.remove("modo-claro")
   document.body.classList.add("modo-oscuro")
}

// Cambiar al modo claro
const cambiarModoClaro = () => {
  document.body.classList.remove("modo-oscuro")
  document.body.classList.add("modo-claro")
}

// Inicializar eventos
const inicializar = () => {
// Asociar eventos a los botones
  $("#boton-tema-oscuro").addEventListener("click", cambiarModoClaro)
  $("#boton-tema-claro").addEventListener("click", cambiarModoOscuro)
  $("#boton-descargar-meme").addEventListener("click", descargarMeme)
}

// Iniciar cuando el DOM esté cargado
inicializar()


// ***************************************************
//                   IMAGEN
// ***************************************************

/** Carga imagen **/

const urlInput = document.getElementById('url-img-input')
const imagenMeme = document.getElementById('imagen-meme')
  urlInput.addEventListener('input', () => {
const url = urlInput.value
  imagenMeme.style.backgroundImage = `url(${url})`
  imagenMeme.style.backgroundSize = 'cover' // Para que la imagen se ajuste
  imagenMeme.style.backgroundPosition = 'center' // Centrar la imagen
})
// Obtiene la URL de una imagen desde un campo de entrada (url-img-input).
// Cambia el fondo del elemento imagen-meme aplicando:
// backgroundImage: establece la URL.
// backgroundSize y backgroundPosition: ajustan cómo se muestra la imagen.

/** Actualiza Color Fondo **/

const actualizarFondo = () => {
  const colorFondo = document.getElementById("blend-mode-color-input").value
  const modoMezcla = document.getElementById("blend-mode-select").value  
  const imagenMeme = document.getElementById("imagen-meme")
    imagenMeme.style.backgroundColor = colorFondo // Aplica el color
    imagenMeme.style.backgroundBlendMode = modoMezcla // Aplica el modo de mezcla
}
document.getElementById("blend-mode-color-input")
document.addEventListener("input", actualizarFondo)
document.getElementById("blend-mode-select")
document.addEventListener("change", actualizarFondo)
// Cambia el color de fondo y el modo de mezcla (background-blend-mode) de imagen-meme según los valores seleccionados por el usuario.


/** Aplicar Filtros **/  

const aplicarFiltros = () => {
  const brillo = document.getElementById("brightness-slider").value
  const opacidad = document.getElementById("opacity-slider").value
  const contraste = document.getElementById("contrast-slider").value
  const saturacion = document.getElementById("saturate-slider").value
  const desenfoque = document.getElementById("blur-slider").value
  const escalaGrises = document.getElementById("grayscale-slider").value
  const sepia = document.getElementById("sepia-slider").value
  const hue = document.getElementById("hue-slider").value
  const negativo = document.getElementById("invert-slider").value

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
document.getElementById("imagen-meme").style.filter = filtros
  }
// Recopila los valores de los deslizadores (input[type="range"]) para crear una cadena de filtros CSS y la aplica a imagen-meme.
  
// Asignar eventos a los sliders
const sliders = document.querySelectorAll("input[type='range']")
  sliders.forEach((slider) => {
    slider.addEventListener("input", aplicarFiltros)
  })

/** Reestablecer Filtros **/  

const reestablecerFiltros = () => {
  document.getElementById("brightness-slider").value = 1
  document.getElementById("opacity-slider").value = 1
  document.getElementById("contrast-slider").value = 100
  document.getElementById("saturate-slider").value = 100
  document.getElementById("blur-slider").value = 0
  document.getElementById("grayscale-slider").value = 0
  document.getElementById("sepia-slider").value = 0
  document.getElementById("hue-slider").value = 0
  document.getElementById("invert-slider").value = 0
  
aplicarFiltros();
};
  
// Botón de reestablecer
document.getElementById("default-filters-button")
document.addEventListener("click", reestablecerFiltros)
  
// ***************************************************
//                  TEXTO
// ***************************************************

/** TEXTO SUPERIOR Función para actualizar el texto superior **/  

const actualizarTextoSuperior = () => {
  const inputTextoSuperior = document.getElementById("top-text-input").value
  const textoSuperior = document.getElementById("texto-superior")
   textoSuperior.textContent = inputTextoSuperior // Actualiza el texto
  }
// Cambia el contenido de texto-superior según el valor ingresado por el usuario.
  
document.getElementById("top-text-input")
document.addEventListener("input", actualizarTextoSuperior)
// Escucha cambios en el campo top-text-input para actualizar automáticamente el texto.

/** Función para mostrar u ocultar el texto superior **/   

const toggleTextoSuperior = () => {
  const checkbox = document.getElementById("no-top-text-checkbox").checked
  const textoSuperior = document.getElementById("texto-superior")
  textoSuperior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}
  
document.getElementById("no-top-text-checkbox")
document.addEventListener("change", toggleTextoSuperior)
// Escuchar cambios en el checkbox "Sin texto superior"

/** TEXTO INFERIOR función para actualizar el texto inferior **/   

const actualizarTextoInferior = () => {
  const inputTextoInferior = document.getElementById("bottom-text-input").value
  const textoInferior = document.getElementById("texto-inferior")
  textoInferior.textContent = inputTextoInferior; // Actualiza el texto
}
  
document.getElementById("bottom-text-input")
document.addEventListener("input", actualizarTextoInferior)

/** Función para mostrar u ocultar el texto inferior **/   
  
const toggleTextoInferior = () => {
  const checkbox = document.getElementById("no-bottom-text-checkbox").checked
  const textoInferior = document.getElementById("texto-inferior")
  textoInferior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}

document.getElementById("no-bottom-text-checkbox")
document.addEventListener("change", toggleTextoInferior)
// Escuchar cambios en el checkbox "Sin texto inferior"

/** ESTILOS DE TEXTO Función para actualizar estilos de texto **/   

const actualizarEstilosTexto = () => {
  const fuente = document.getElementById("text-font-select").value
  const tamanio = document.getElementById("text-size-input").value + "px"
  const color = document.getElementById("text-color-input").value
  const fondoColor = document.getElementById("text-bg-color-input").value

  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")]
  textos.forEach((texto) => {
    texto.style.fontFamily = fuente
    texto.style.fontSize = tamanio
    texto.style.color = color
    texto.style.backgroundColor = fondoColor
  })
}
// Cambia la fuente y el tamaño de los textos (texto-superior y texto-inferior) según las entradas del usuario.

document.getElementById("text-font-select").addEventListener("change", actualizarEstilosTexto)
document.getElementById("text-size-input").addEventListener("input", actualizarEstilosTexto)
document.getElementById("text-color-input").addEventListener("input", actualizarEstilosTexto)
document.getElementById("text-bg-color-input").addEventListener("input", actualizarEstilosTexto)
// Escuchar cambios en los inputs de estilo

/** ALINEACION DE TEXTO Función para actualizar la alineacion de texto **/   

const alinearTexto = (alineacion) => {
  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")]
  textos.forEach((texto) => {
    texto.style.textAlign = alineacion
  })
}
  
document.getElementById("text-left-align-button").addEventListener("click", () => alinearTexto("left"))
document.getElementById("text-center-align-button").addEventListener("click", () => alinearTexto("center"))
document.getElementById("text-right-align-button").addEventListener("click", () => alinearTexto("right"))
// Botones para alinear texto

/** CONTORNO DE TEXTO Función para actualizar el contorno de texto **/   

// Función para actualizar el contorno del texto
const aplicarContornoTexto = (tipoContorno) => {
// Referencia a los textos superior e inferior
const textos = [
  document.getElementById("texto-superior"),
  document.getElementById("texto-inferior"),
]

// Aplica los estilos de contorno dependiendo del tipo seleccionado
textos.forEach((texto) => {
  if (tipoContorno === "ninguno") {
    texto.style.webkitTextStroke = "0px" // Sin contorno
    } else if (tipoContorno === "claro") {
    texto.style.webkitTextStroke = "2px white" // Contorno blanco
    } else if (tipoContorno === "oscuro") {
    texto.style.webkitTextStroke = "2px black" // Contorno negro
    }
  })
}

// Asignar eventos a los botones
document
  .getElementById("no-outline-button")
  .addEventListener("click", () => aplicarContornoTexto("ninguno"))

document
  .getElementById("light-outline-button")
  .addEventListener("click", () => aplicarContornoTexto("claro"))

document
  .getElementById("dark-outline-button")
  .addEventListener("click", () => aplicarContornoTexto("oscuro"))


/** ESPACIADO DE TEXTO Función para actualizar el espacio de texto **/  

// const actualizarEspaciado = () => {
//   const paddingY = $("#padding-input").value;
//   $("#texto-superior").style.padding = `${paddingY}px 50px`;
//   $("#texto-inferior").style.padding = `${paddingY}px 50px`;
// };


/** INTERLINEADO DE TEXTO Función para actualizar el interlineado de texto **/  
  

// ***************************************************
//                 ASIDE -  PANELES
// ***************************************************
  
// Obtener referencias de los elementos
  const botonImg = document.getElementById('panel-img-boton')
  const botonTexto = document.getElementById('panel-texto-boton')
  const panel = document.getElementById('panel')
  const panelImg = document.getElementById('panel-img')
  const panelText = document.getElementById('panel-text')
  const botonCerrar = document.getElementById('panel-boton-cerrar')
  
// Mostrar el panel de imagen
botonImg.addEventListener('click', () => {
  panel.classList.remove('panel-oculto')
  panelImg.classList.remove('oculto')
  panelText.classList.add('oculto')
})
  
// Mostrar el panel de texto
botonTexto.addEventListener('click', () => {
  panel.classList.remove('panel-oculto')
  panelText.classList.remove('oculto')
  panelImg.classList.add('oculto')
})

// Cerrar el panel
botonCerrar.addEventListener('click', () => {
  panel.classList.add('panel-oculto')
})
  




} // cierra window.onload 
  

  
  