const tbody = document.querySelector('tbody')
const animacionImg = 'animacion-btn.gif'

function retornarTablaHTML({codigo,imagen,nombre,ingredientes,precio} = compras) {
    return `<tr>
                <td>${codigo}</td>
                <td>${imagen}</td>
                <td>${nombre}</td>
                <td>${ingredientes}</td>
                <td>${precio}</td>
                <td><button id=" ${codigo}" class="button button-eliminar">⛔️</button></td>
            </tr>`
}
cargarProd()

function activarClickEnBotonesEliminar () {
    const botonesEli = document.querySelectorAll("button.button.button-eliminar")
    for (let botonEli of botonesEli) {
        botonEli.addEventListener('click', (e)=> {
            const eliminarProducto = compras.find((prod)=> prod.codigo === parseInt(e.target.id))
            let indice = compras.indexOf(eliminarProducto)
            compras.splice(indice,1)
            cargarProd()
            activarClickEnBotonesEliminar()    
            mostrarMensajesEli(`Hamburguesa ${eliminarProducto.nombre} se eliminó de tu carrito`, 'red')
        })
    }
}

function cargarProd() {
    tbody.innerHTML = ''
    compras.forEach((producto) => { tbody.innerHTML += retornarTablaHTML(producto)})
}
activarClickEnBotonesEliminar()

function botonComprar () {
    const btnComprar = document.querySelector("#btnComprar")
    btnComprar.addEventListener('click', ()=> {
    btnComprar.innerHTML = `<img src='${animacionImg}' />`
    const timer = parseInt(Math.random() * 6000)
    setTimeout(() => {    
    calcularTotalCarrito()    
    mostrarMensajeCompras('El total de tu pedido es: $' + valorTotal + '. ' + 'Muchas gracias por tu compra!!!', 'Green')
    btnComprar.innerText = ' '},timer);
    localStorage.clear()
    })
}
botonComprar ()

function calcularTotalCarrito() {
    let total = 0
    compras.forEach((prod)=> {total += prod.precio})
    let totalCarrito = compras.reduce((acc, producto)=> acc + producto.precio, 0)
    valorTotal = totalCarrito
}