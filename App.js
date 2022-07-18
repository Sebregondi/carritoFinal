import { carritoIndex } from "./carritoIndex.js";

export const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById ("producto-contenedor");

// GUARDA ACÁ
    productos.forEach (producto => {
        const div = document.createElement ('div');
        div.classList.add ('card');
        div.innerHTML += `<div class="card mb-4 shadow-sm">
        <div class="card-header">
            <h4 class="my-0 font-weight-bold">${producto.nombre}</h4>
        </div>
        <div class="card-body">
            <img src=${producto.img} class="card-img-top">
            <h1 class="card-title pricing-card-title precio"><span class="">${producto.precio}</span></h1>

            <ul class="list-unstyled mt-3 mb-4">
                <li></li>
                <li><b> Jorge Luis Borges</b></li>
                <li>${producto.genero}</li>
            </ul>
            <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
        </div>
    </div>`

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
    carritoIndex(producto.id);
        });
    });
}