import { actualizarCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";

export const carritoIndex = (productoID) => {
    let carritoDeCompras = [];
    if (localStorage.getItem ("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    }

    let productoRepetido = carritoDeCompras.find (producto => producto.id == productoID);
    contarProductosRepetidos (productoRepetido, productoID, carritoDeCompras);
}

const contarProductosRepetidos = (prodRepetido, productoID, carritoDeCompras) => {
    if (prodRepetido) {
        prodRepetido.cantidad++
        document.getElementById (`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
        actualizarCarrito (carritoDeCompras);
    } else {
        agregarProductoAlCarrito (productoID, carritoDeCompras);
    }
}

const agregarProductoAlCarrito = (productoID, carritoDeCompras) => {
    const contenedor = document.getElementById ('carrito-contenedor');
    const producto = productos.find (producto => producto.id == productoID);
    carritoDeCompras.push (producto);

    producto.cantidad = 1;

    const
}