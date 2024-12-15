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
const urlInput = document.getElementById('url-img-input')
const imagenMeme = document.getElementById('imagen-meme')
  urlInput.addEventListener('input', () => {
const url = urlInput.value
  imagenMeme.style.backgroundImage = `url(${url})`
  imagenMeme.style.backgroundSize = 'cover' // Para que la imagen se ajuste
  imagenMeme.style.backgroundPosition = 'center' // Centra la imagen
})

/** Actualiza Color Fondo **/
const actualizarFondo = () => {
  const colorFondo = document.getElementById("mezcla-color-input").value
  const modoMezcla = document.getElementById("mezcla-color-selector").value  
  const imagenMeme = document.getElementById("imagen-meme")
    imagenMeme.style.backgroundColor = colorFondo // Aplica el color
    imagenMeme.style.backgroundBlendMode = modoMezcla // Aplica el modo de mezcla
}
document.getElementById("mezcla-color-input")
document.addEventListener("input", actualizarFondo)
document.getElementById("mezcla-color-selector")
document.addEventListener("change", actualizarFondo)

/** Aplicar Filtros **/  
const aplicarFiltros = () => {
  const brillo = document.getElementById("deslizante-brillo").value
  const opacidad = document.getElementById("deslizante-opacidad").value
  const contraste = document.getElementById("deslizante-contraste").value
  const saturacion = document.getElementById("deslizante-saturacion").value
  const desenfoque = document.getElementById("deslizante-desenfoque").value
  const escalaGrises = document.getElementById("deslizante-grises").value
  const sepia = document.getElementById("deslizante-sepia").value
  const hue = document.getElementById("deslizante-hue").value
  const negativo = document.getElementById("deslizante-negativo").value

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
  
// Asigna eventos a los sliders
const sliders = document.querySelectorAll("input[type='range']")
  sliders.forEach((slider) => {
    slider.addEventListener("input", aplicarFiltros)
  })

/** Restablecer Filtros **/  
const restablecerFiltros = () => {
  document.getElementById("deslizante-brillo").value = 1
  document.getElementById("deslizante-opacidad").value = 1
  document.getElementById("deslizante-contraste").value = 100
  document.getElementById("deslizante-saturacion").value = 100
  document.getElementById("deslizante-desenfoque").value = 0
  document.getElementById("deslizante-grises").value = 0
  document.getElementById("deslizante-sepia").value = 0
  document.getElementById("deslizante-hue").value = 0
  document.getElementById("deslizante-negativo").value = 0
  aplicarFiltros();
}

document.getElementById("boton-estandar-restablecer-filtros").addEventListener("click", restablecerFiltros)

// ***************************************************
//                  TEXTO
// ***************************************************

/** TEXTO SUPERIOR Función para actualizar el texto superior **/  
const actualizarTextoSuperior = () => {
  const inputTextoSuperior = document.getElementById("texto-superior-input").value
  const textoSuperior = document.getElementById("texto-superior")
   textoSuperior.textContent = inputTextoSuperior // Actualiza el texto
  }
  
document.getElementById("texto-superior-input")
document.addEventListener("input", actualizarTextoSuperior)


/** Función para mostrar u ocultar el texto superior **/   
const toggleTextoSuperior = () => {
  const checkbox = document.getElementById("no-texto-superior-checkbox").checked
  const textoSuperior = document.getElementById("texto-superior")
  textoSuperior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}
  
document.getElementById("no-texto-superior-checkbox")
document.addEventListener("change", toggleTextoSuperior)


/** TEXTO INFERIOR función para actualizar el texto inferior **/   
const actualizarTextoInferior = () => {
  const inputTextoInferior = document.getElementById("texto-inferior-input").value
  const textoInferior = document.getElementById("texto-inferior")
  textoInferior.textContent = inputTextoInferior; // Actualiza el texto
}
  
document.getElementById("texto-inferior-input")
document.addEventListener("input", actualizarTextoInferior)

/** Función para mostrar u ocultar el texto inferior **/    
const toggleTextoInferior = () => {
  const checkbox = document.getElementById("no-texto-inferior-checkbox").checked
  const textoInferior = document.getElementById("texto-inferior")
  textoInferior.style.display = checkbox ? "none" : "block" // Ocultar o mostrar
}

document.getElementById("no-texto-inferior-checkbox")
document.addEventListener("change", toggleTextoInferior)

/** ESTILOS DE TEXTO Función para actualizar estilos de texto **/   
const actualizarEstilosTexto = () => {
  const fuente = document.getElementById("texto-fuente-seleccion").value
  const tamanio = document.getElementById("texto-tamanio-input").value + "px"
  const color = document.getElementById("texto-color-input").value
  const fondoColor = document.getElementById("texto-bg-color-input").value

  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")]
  textos.forEach((texto) => {
    texto.style.fontFamily = fuente
    texto.style.fontSize = tamanio
    texto.style.color = color
    texto.style.backgroundColor = fondoColor
  })
}

document.getElementById("texto-fuente-seleccion").addEventListener("change", actualizarEstilosTexto)
document.getElementById("texto-tamanio-input").addEventListener("input", actualizarEstilosTexto)
document.getElementById("texto-color-input").addEventListener("input", actualizarEstilosTexto)
document.getElementById("texto-bg-color-input").addEventListener("input", actualizarEstilosTexto)

/** ALINEACION DE TEXTO Función para actualizar la alineacion de texto **/   
const alinearTexto = (alineacion) => {
  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")]
  textos.forEach((texto) => {
    texto.style.textAlign = alineacion
  })
}

document.getElementById("boton-alineacion-izquierda").addEventListener("click", () => alinearTexto("left"))
document.getElementById("boton-alineacion-centrada").addEventListener("click", () => alinearTexto("center"))
document.getElementById("boton-alineacion-derecha").addEventListener("click", () => alinearTexto("right"))

/** CONTORNO DE TEXTO Función para actualizar el contorno de texto **/   
const aplicarContornoTexto = (tipoContorno) => {
const textos = [
  document.getElementById("texto-superior"),
  document.getElementById("texto-inferior"),
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

document
  .getElementById("boton-texto-no-linea")
  .addEventListener("click", () => aplicarContornoTexto("ninguno"))

document
  .getElementById("boton-texto-linea-claro")
  .addEventListener("click", () => aplicarContornoTexto("claro"))

document
  .getElementById("boton-texto-linea-oscuro")
  .addEventListener("click", () => aplicarContornoTexto("oscuro"))

/** ESPACIADO DE TEXTO Función para actualizar el espacio de texto **/  
const actualizarEspaciado = () => {
  const espaciado = document.getElementById("espaciado-input").value
  document.getElementById("texto-superior").style.padding = `${espaciado}px 50px`
  document.getElementById("texto-inferior").style.padding = `${espaciado}px 50px`
}

document.getElementById("espaciado-input").addEventListener("input", actualizarEspaciado)

/** INTERLINEADO DE TEXTO Función para actualizar el interlineado de texto **/  
const actualizarInterlineado = () => {
  const interlineado = document.getElementById("line-height-input").value;
  document.getElementById("texto-superior").style.lineHeight = interlineado
  document.getElementById("texto-inferior").style.lineHeight = interlineado
}

document.getElementById("line-height-input").addEventListener("change", actualizarInterlineado)

// ***************************************************
//                 ASIDE -  PANELES
// ***************************************************
  
// Obtener referencias de los elementos
  const botonImg = document.getElementById('panel-img-boton')
  const botonTexto = document.getElementById('panel-texto-boton')
  const panel = document.getElementById('panel')
  const panelImg = document.getElementById('panel-img')
  const panelText = document.getElementById('panel-texto')
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
  
// Iniciar cuando el DOM esté cargado
inicializar()

} // cierra window.onload 
  

  
  