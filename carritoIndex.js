import { actualizarCarrito } from "./actualizarCarrito.js";
import { getData } from "./getData.js";

export const carritoIndex = (productoID) => {
    let carritoDeCompras = [];
    if (localStorage.getItem ("carrito")) {
        carritoDeCompras = obtenerCarritoStorage();
    };

    let productoRepetido = carritoDeCompras.find (producto => producto.id == productoID);
    contarProductosRepetidos (productoRepetido, productoID, carritoDeCompras);
};

const contarProductosRepetidos = (prodRepetido, productoID, carritoDeCompras) => {
    if (prodRepetido) {
        prodRepetido.cantidad++
        document.getElementById (`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
        actualizarCarrito (carritoDeCompras);
    } else {
        agregarProductoAlCarrito (productoID, carritoDeCompras);
    };
};

const agregarProductoAlCarrito = async (productoId, carritoDeCompras) => {
    const contenedor = document.getElementById ('carrito-contenedor');
    const productos = await getData();

    const producto = productos.find (producto => producto.id == productoId);
    carritoDeCompras.push (producto);

    producto.cantidad = 1;

    const div = document.createElement ('div');
    div.classList.add ('productoEnCarrito');

    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id}
                    class="btn waves-effect waves-light boton-eliminar" value ="${producto.id}">X</i></button>`

    contenedor.appendChild (div);
    actualizarCarrito (carritoDeCompras);
};

export const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter (el => el.id != productoId);

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
                        <p>Precio: $${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                        <button id=eliminar${producto.id} class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>`

        contenedor.appendChild(div);

    const btnEliminar = document.getElementById(`eliminar${producto.id}`);
    btnEliminar.addEventListener ('click', () => {
        Toastify({
        text: "Item eliminado",
        duration: 3000,
        position: "center"
        }).showToast()
        }); 
    });
};

export const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse (localStorage.getItem ("carrito"));
    return carritoStorage;
};

const btnVaciar = document.getElementById ('vaciar-carrito');
btnVaciar.addEventListener ('click', () => {
    

    pintarProductosCarrito();
});