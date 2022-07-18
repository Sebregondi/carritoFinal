import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { obtenerCarritoStorage, pintarProductosCarrito } from "./carritoIndex.js";
import { productos } from "./stock.js";

document.addEventListener ("DOMContentLoaded", () => {
    mostrarProductos (productos);

    if (localStorage.getItem("carrito")) {
        const carritoStorage = obtenerCarritoStorage();
        pintarProductosCarrito (carritoStorage);
        actualizarCarrito (carritoStorage);
    }
})