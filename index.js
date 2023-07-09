const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')

const armarFilaHTML = (prod)=> {
    return `<tr>
                <td class="class-table-number">${prod.codigo}</td>
                <td class="emoji-image">${prod.imagen}</td>
                <td>${prod.nombre}</td>
                <td>${prod.ingredientes}</td>
                <td>$ ${prod.precio}</td>
                <td><button id=" ${prod.codigo}" class="button button-outline button-big-emoji">🛒</button></td>
            </tr>`
}

function armarFilaHTMLError() {
    return `<tr>
                <td class="error">"Se produjo un error"</td>
                <td class="error">"en la carga de los productos."</td>
                <td class="error">"Por favor intentalo más tarde."</td>
                <td class="error">"Se produjo un error"</td>
                <td class="error">"en la carga de los productos."</td>
                <td class="error">"Por favor intentalo más tarde."</td>
            </tr>`
}

function cargarProductos(array) {
    tableBody.innerHTML = ''
    array.length > 0 ? array.forEach((producto) => tableBody.innerHTML += armarFilaHTML(producto) ) 
                     : tableBody.innerHTML = armarFilaHTMLError()
}

const activarClickEnBotonesCarrito = ()=> {
    const botonesCar = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    for (let botonCar of botonesCar) {
        botonCar.addEventListener('click', ()=> {
            let resultadoProducto = hamburguesas.find((producto)=> producto.codigo === parseInt(botonCar.id))
            compras.push(resultadoProducto)
            guardarEnLocalStorage()
            mensajeEleccion(resultadoProducto.nombre)
        })
    }
}

const filtrarProductos = ()=> {
    let resultados = hamburguesas.filter((producto)=> producto.ingredientes.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (resultados.length > 0) {
        cargarProductos(resultados)
    }
    activarClickEnBotonesCarrito()
}
inputSearch.addEventListener('search', filtrarProductos)

function obtenerProductos() {
    fetch(URL)
        .then((response)=> response.json() )
        .then((datos)=> hamburguesas.push(...datos))
        .then(()=> cargarProductos(hamburguesas))
        .then(()=> activarClickEnBotonesCarrito())
        .catch((error)=> tableBody.innerHTML = armarFilaHTMLError())
}
obtenerProductos()
