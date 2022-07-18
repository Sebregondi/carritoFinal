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

    const div = document.createElement ('div');
    div.classList.add ('productoEnCarrito');

    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                    <button id=eliminar${producto.id}
                    class="btn waves-effect waves-light boton-eliminar" value ="${producto.id}">X</i></button>`

    contenedor.appendChild (div);
    actualizarCarrito (carritoDeCompras);
};

export const eliminarProductosCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter (el.id != productoId);

    actualizarCarrito (carritoActualizado);
    pintarProductosCarrito (carritoActualizado);
};

export const pintarProductosCarrito = (carritoDeCompras) => {
    const contenedor = document.getElementById ('carrito-contenedor');

    contenedor.innerHTML = "";

    carritoDeCompras.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio:${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                        <button id=eliminar${producto.id} class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>`

        contenedor.appendChild(div);
    });
};

export const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse (localStorage.getItem ("carrito"))
    return carritoStorage;
}