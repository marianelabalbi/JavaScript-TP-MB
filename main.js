window.onload = () => { // para asegurarte de que todo en tu página esté completamente cargado antes de ejecutar tu código

/** Atajo para document.querySelector */
const $ = (selector) => document.querySelector(selector);

/** Descargar Meme */
const descargarMeme = () => {
  domtoimage.toBlob($("#canvas-meme")).then((blob) => {
    saveAs(blob, "mi-meme.png");
  });
};

/** Tema */
const cambiarModoOscuro = () => {
  document.body.classList.remove("modo-claro");
  document.body.classList.add("modo-oscuro");
};

const cambiarModoClaro = () => {
  document.body.classList.remove("modo-oscuro");
  document.body.classList.add("modo-claro");
};

/** Imagen */

// Referencia al input de URL y la imagen del meme
const urlInput = document.getElementById('url-img-input');
const imagenMeme = document.getElementById('imagen-meme');

// Evento para actualizar la URL de la imagen
urlInput.addEventListener('input', () => {
  const url = urlInput.value;
  imagenMeme.style.backgroundImage = `url(${url})`;
  imagenMeme.style.backgroundSize = 'cover'; // Para que la imagen se ajuste
  imagenMeme.style.backgroundPosition = 'center'; // Centrar la imagen
});

// Función para actualizar el color y modo de mezcla del fondo
const actualizarFondo = () => {
  const colorFondo = document.getElementById("blend-mode-color-input").value;
  const modoMezcla = document.getElementById("blend-mode-select").value;

  const imagenMeme = document.getElementById("imagen-meme");
  imagenMeme.style.backgroundColor = colorFondo; // Aplica el color
  imagenMeme.style.backgroundBlendMode = modoMezcla; // Aplica el modo de mezcla
};

// Escuchar cambios en el input de color
document
  .getElementById("blend-mode-color-input")
  .addEventListener("input", actualizarFondo);

// Escuchar cambios en el selector de modo
document
  .getElementById("blend-mode-select")
  .addEventListener("change", actualizarFondo);



// Función para aplicar filtros
const aplicarFiltros = () => {
  const brillo = document.getElementById("brightness-slider").value;
  const contraste = document.getElementById("contrast-slider").value;
  const saturacion = document.getElementById("saturate-slider").value;
  const desenfoque = document.getElementById("blur-slider").value;
  const escalaGrises = document.getElementById("grayscale-slider").value;
  const sepia = document.getElementById("sepia-slider").value;
  const hue = document.getElementById("hue-slider").value;
  const negativo = document.getElementById("invert-slider").value;

  const filtros = `
    brightness(${brillo})
    contrast(${contraste}%)
    saturate(${saturacion}%)
    blur(${desenfoque}px)
    grayscale(${escalaGrises}%)
    sepia(${sepia}%)
    hue-rotate(${hue}deg)
    invert(${negativo})
  `;

  document.getElementById("imagen-meme").style.filter = filtros;
};

// Asignar eventos a los sliders
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach((slider) => {
  slider.addEventListener("input", aplicarFiltros);
});

// Reestablecer filtros
const reestablecerFiltros = () => {
  document.getElementById("brightness-slider").value = 1;
  document.getElementById("contrast-slider").value = 100;
  document.getElementById("saturate-slider").value = 100;
  document.getElementById("blur-slider").value = 0;
  document.getElementById("grayscale-slider").value = 0;
  document.getElementById("sepia-slider").value = 0;
  document.getElementById("hue-slider").value = 0;
  document.getElementById("invert-slider").value = 0;

  aplicarFiltros();
};

// Botón de reestablecer
document
  .getElementById("default-filters-button")
  .addEventListener("click", reestablecerFiltros);


/** Texto */
// const actualizarTextos = () => {
//   $("#texto-superior").innerText = $("#top-text-input").value;
//   $("#texto-inferior").innerText = $("#bottom-text-input").value;
// };

// const alternarTextos = () => {
//   $("#texto-superior").classList.toggle("oculto", $("#no-top-text-checkbox").checked);
//   $("#texto-inferior").classList.toggle("oculto", $("#no-bottom-text-checkbox").checked);
// };

// const alinearTexto = (alineacion) => {
//   $("#texto-superior").style.textAlign = alineacion;
//   $("#texto-inferior").style.textAlign = alineacion;
// };

// const actualizarTamanioTexto = () => {
//   const tamanio = $("#text-size-input").value;
//   $("#texto-superior").style.fontSize = `${tamanio}px`;
//   $("#texto-inferior").style.fontSize = `${tamanio}px`;
// };

// const actualizarFuente = () => {
//   const fuente = $("#text-font-select").value;
//   $("#texto-superior").style.fontFamily = fuente;
//   $("#texto-inferior").style.fontFamily = fuente;
// };

// const actualizarColorTexto = () => {
//   const color = $("#text-color-input").value.toUpperCase();
//   $("#text-color").innerText = color;
//   $("#texto-superior").style.color = color;
//   $("#texto-inferior").style.color = color;
// };

// const actualizarFondoTexto = () => {
//   const color = $("#text-background-color-input").value;
//   const transparente = $("#text-no-background-checkbox").checked;
  
//   if (!transparente) {
//     $("#text-background-color").innerText = color.toUpperCase();
//     $("#texto-superior").style.backgroundColor = color;
//     $("#texto-inferior").style.backgroundColor = color;
//   } else {
//     $("#texto-superior").style.backgroundColor = "transparent";
//     $("#texto-inferior").style.backgroundColor = "transparent";
//   }
// };

// const actualizarEspaciado = () => {
//   const paddingY = $("#padding-input").value;
//   $("#texto-superior").style.padding = `${paddingY}px 50px`;
//   $("#texto-inferior").style.padding = `${paddingY}px 50px`;
// };

// const actualizarInterlineado = () => {
//   const lineHeight = $("#line-height-input").value;
//   $("#texto-superior").style.lineHeight = lineHeight;
//   $("#texto-inferior").style.lineHeight = lineHeight;
// };

// TEXTO SUPERIOR Función para actualizar el texto superior
const actualizarTextoSuperior = () => {
  const inputTextoSuperior = document.getElementById("top-text-input").value;
  const textoSuperior = document.getElementById("texto-superior");
  textoSuperior.textContent = inputTextoSuperior; // Actualiza el texto
};

// Escuchar cambios en el input del texto superior
document
  .getElementById("top-text-input")
  .addEventListener("input", actualizarTextoSuperior);

  // Función para mostrar u ocultar el texto superior
const toggleTextoSuperior = () => {
  const checkbox = document.getElementById("no-top-text-checkbox").checked;
  const textoSuperior = document.getElementById("texto-superior");
  textoSuperior.style.display = checkbox ? "none" : "block"; // Ocultar o mostrar
};

// Escuchar cambios en el checkbox "Sin texto superior"
document
  .getElementById("no-top-text-checkbox")
  .addEventListener("change", toggleTextoSuperior);


  // TEXTO INFERIOR Función para actualizar el texto inferior
const actualizarTextoInferior = () => {
  const inputTextoInferior = document.getElementById("bottom-text-input").value;
  const textoInferior = document.getElementById("texto-inferior");
  textoInferior.textContent = inputTextoInferior; // Actualiza el texto
};

// Escuchar cambios en el input del texto inferior
document
  .getElementById("bottom-text-input")
  .addEventListener("input", actualizarTextoInferior);

// Función para mostrar u ocultar el texto inferior
const toggleTextoInferior = () => {
  const checkbox = document.getElementById("no-bottom-text-checkbox").checked;
  const textoInferior = document.getElementById("texto-inferior");
  textoInferior.style.display = checkbox ? "none" : "block"; // Ocultar o mostrar
};

// Escuchar cambios en el checkbox "Sin texto inferior"
document
  .getElementById("no-bottom-text-checkbox")
  .addEventListener("change", toggleTextoInferior);

// ESTILOS DE TEXTO Función para actualizar estilos de texto
const actualizarEstilosTexto = () => {
  const fuente = document.getElementById("text-font-select").value;
  const tamanio = document.getElementById("text-size-input").value + "px";
  const color = document.getElementById("text-color-input").value;
  const fondoColor = document.getElementById("text-bg-color-input").value;

  // Aplica estilos a ambos textos
  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")];
  textos.forEach((texto) => {
    texto.style.fontFamily = fuente;
    texto.style.fontSize = tamanio;
    texto.style.color = color;
    texto.style.backgroundColor = fondoColor;
  });
};

// Escuchar cambios en los inputs de estilo
document.getElementById("text-font-select").addEventListener("change", actualizarEstilosTexto);
document.getElementById("text-size-input").addEventListener("input", actualizarEstilosTexto);
document.getElementById("text-color-input").addEventListener("input", actualizarEstilosTexto);
document.getElementById("text-bg-color-input").addEventListener("input", actualizarEstilosTexto);

// Función para alinear texto
const alinearTexto = (alineacion) => {
  const textos = [document.getElementById("texto-superior"), document.getElementById("texto-inferior")];
  textos.forEach((texto) => {
    texto.style.textAlign = alineacion;
  });
};

// Botones para alinear texto
document.getElementById("text-left-align-button").addEventListener("click", () => alinearTexto("left"));
document.getElementById("text-center-align-button").addEventListener("click", () => alinearTexto("center"));
document.getElementById("text-right-align-button").addEventListener("click", () => alinearTexto("right"));




/** Paneles */



// Obtener referencias de los elementos
const botonImg = document.getElementById('panel-img-boton');
const botonTexto = document.getElementById('panel-texto-boton');
const panel = document.getElementById('panel');
const panelImg = document.getElementById('panel-img');
const panelText = document.getElementById('panel-text');
const botonCerrar = document.getElementById('panel-boton-cerrar');

// Mostrar el panel de imagen
botonImg.addEventListener('click', () => {
  panel.classList.remove('panel-oculto');
  panelImg.classList.remove('oculto');
  panelText.classList.add('oculto');
});

// Mostrar el panel de texto
botonTexto.addEventListener('click', () => {
  panel.classList.remove('panel-oculto');
  panelText.classList.remove('oculto');
  panelImg.classList.add('oculto');
});

// Cerrar el panel
botonCerrar.addEventListener('click', () => {
  panel.classList.add('panel-oculto');
});


const inicializar = () => {
  $("#boton-tema-oscuro").addEventListener("click", cambiarModoClaro);
  $("#boton-tema-claro").addEventListener("click", cambiarModoOscuro);
  $("#boton-descargar-meme").addEventListener("click", descargarMeme);
};

document.addEventListener("DOMContentLoaded", inicializar);


} // cierra window.onload 