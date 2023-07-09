const URL = 'hamburguesas.json'
const hamburguesas = []

const guardarEnLocalStorage = ()=> {
    if (compras.length > 0) {
        localStorage.setItem('compras', JSON.stringify(compras))
    }
}

const recuperarComprasDeLocalStorage = ()=> {
    if (localStorage.getItem('compras')) {
        return JSON.parse(localStorage.getItem('compras'))
    } else {
        return []
    }
}

const compras = recuperarComprasDeLocalStorage()

function mensajeEleccion(producto) {
    Toastify({
        text: `Hamburguesa ${producto} se agregó al carrito.`,
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true,
        style: {
        background: "orange",
        color: "Blach",
        }
      }).showToast();
}

const mostrarMensajesEli = (texto, color)=> {
    const estilo = document.querySelector('div.mensajeEli')
    estilo.textContent = texto
    estilo.style.background = color
}
    
const mostrarMensajeCompras = (texto, color)=> {
    const estilo = document.querySelector('div.mensajeCompra')
    estilo.textContent = texto
    estilo.style.background = color
}