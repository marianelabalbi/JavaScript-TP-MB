

/**Tema*/

const cambiarModoOscuro = () => {
  document.body.classList.remove('modo-claro')
  document.body.classList.add('modo-oscuro')
}

const cambiarModoClaro = () => {
  document.body.classList.remove('modo-oscuro')
  document.body.classList.add('modo-claro')
}



/**
 * Paneles
 */

const ocultarPanel = () => {
    $('panel').classList.add('oculto')
  }
  
  const mostrarPanel = () => {
    $('panel').classList.remove('oculto')
  }
  
  const mostrarPanelImagen = () => {
    $(`panel-text0`).classList.add('oculto')
    $(`panel-img`).classList.remove('oculto')
  }
  
  const mostrarPanelTexto = () => {
    $(`panel-img`).classList.add('oculto')
    $(`panel-text0`).classList.remove('oculto')
  }
  
  /** Inicializaciones*/

const inicializarTemas = () => {
    $('boton-tema-oscuro').addEventListener('click', cambiarModoClaro)
    $('boton-tema-claro').addEventListener('click', cambiarModoOscuro)
  }
  
  const inicializarPaneles = () => {
    $('panel-img-boton').addEventListener('click', () => {
      mostrarPanelImagen()
      mostrarPanel()
    })
    $('texto-panel-boton').addEventListener('click', () => {
      mostrarPanelTexto()
      mostrarPanel()
    })
    //   queda cambiar panel-close-button
    $('panel-close-button').addEventListener('click', ocultarPanel)
  } 

  