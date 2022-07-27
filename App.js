import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

export const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById ("producto-contenedor");

const productos = await getData();

    productos.forEach (producto => {
        const div = document.createElement ('div');
        div.classList.add ('card');
        div.innerHTML += `<div class="card-image">
        <img src=${producto.img}>
        <span class="card-title">$${producto.precio}</span>
        
    </div>
    <div class="card-content">
        <p><b>Título:</b> ${producto.nombre}</p>
        <p><b>Autor:</b> ${producto.autor}</p>
        <p><b>Género:</b> ${producto.genero}</p>
        <p><b>Extensión:</b> ${producto.pags}</p>
<br>
        <a class="btn btn-block btn-primary agregar-carrito" data-id="1" id=boton${producto.id}>Agregar al carrito</a>
    </div>`

    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
    carritoIndex(producto.id);
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        position: "center"
        }).showToast()
        });
    });
}