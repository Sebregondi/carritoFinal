import { carritoIndex } from "./carritoIndex.js";

export const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById ("producto-contenedor");

// GUARDA ACÁ
    productos.forEach (producto => {
        const div = document.createElement ('div');
        div.classList.add ('card');
        div.innerHTML += `<div class="card-image">
        <img src=${producto.img}>
        <span class="card-title">$${producto.precio}</span>
        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
    </div>
    <div class="card-content">
        <p><b>Título:</b> ${producto.nombre}</p>
        <p><b>Autor:</b> ${producto.autor}</p>
        <p><b>Género:</b> ${producto.genero}</p>
        <p><b>Extensión:</b> ${producto.pags}</p>
    </div>`

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
    carritoIndex(producto.id);
        });
    });
}