import { carritoIndex } from "./carritoIndex.js";

export const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById ("producto-contenedor");

    productos.forEach (producto => {
        const div = document.createElement ('div');
        div.classList.add ('card');
        div.innerHTML += 
    })
}