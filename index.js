import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { obtenerCarritoStorage, pintarProductosCarrito } from "./carritoIndex.js";

document.addEventListener ("DOMContentLoaded", () => {
    mostrarProductos ();

    if (localStorage.getItem("carrito")) {
        const carritoStorage = obtenerCarritoStorage();
        pintarProductosCarrito (carritoStorage);
        actualizarCarrito (carritoStorage);
    };
});