import { eliminarProductoCarrito } from "./carritoIndex.js";

const modalContenedor = document.querySelector ('.modal-contenedor');
const abrirCarrito = document.getElementById ('cesta-carrito');
const cerrarCarrito = document.getElementById ('btn-cerrar-carrito');
const modalCarrito = document.querySelector ('.modal-carrito');

abrirCarrito.addEventListener ('click', () => {
    modalContenedor.classList.toggle ('modal-active')
});

cerrarCarrito.addEventListener ('click', () => {
    modalContenedor.classList.toggle ('modal-active')
});

modalContenedor.addEventListener ('click', () => {
    cerrarCarrito.click ()
});

modalCarrito.addEventListener ('click', (e) => {
    if (e.target.classList.contains ("boton-eliminar")) {
        eliminarProductoCarrito (e.target.value);
    }
    e.stopPropagation();
});