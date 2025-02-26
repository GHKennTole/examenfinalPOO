document.addEventListener('DOMContentLoaded', (event) => {
    const inputProducto = document.getElementById('producto');
    const inputPrecio = document.getElementById('precio');
    const botonAgregar = document.getElementById('boton-agregar');
    const toggleSwitch = document.getElementById('switch');
    const modeIndicator = document.getElementById('mode-indicator');

    inputProducto.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            inputPrecio.focus();
        }
    });

    inputPrecio.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            botonAgregar.click();
            inputProducto.focus();
        }
    });

    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIndicator.textContent = 'Modo Claro';
        } else {
            modeIndicator.textContent = 'Modo Oscuro';
        }
    });
});


/* ACA COMIENZA EL SCRIPT DEL PROFE*/
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

class Carrito {
    constructor() {
        this.productos = [];
        this.indexModificacion = null;
    }

    agregar(producto) {
        const botonAgregar = document.getElementById("boton-agregar");
        if (this.indexModificacion !== null) {
            this.productos[this.indexModificacion] = producto;
            this.indexModificacion = null;
            botonAgregar.textContent = "Agregar";
            botonAgregar.classList.remove("modificar");
        } else {
            this.productos.push(producto);
        }
        this.mostrarLista();
    }

    eliminar(index) {
        this.productos.splice(index, 1);
        this.mostrarLista();
    }

    modificar(index) {
        const producto = this.productos[index];
        document.getElementById("producto").value = producto.nombre;
        document.getElementById("precio").value = producto.precio;
        const botonAgregar = document.getElementById("boton-agregar");
        botonAgregar.textContent = "Modificar";
        botonAgregar.classList.add("modificar");
        this.indexModificacion = index;
    }

    
    calcularTotal() {
        return this.productos.reduce((total, prod) => total + prod.precio, 0).toFixed(2);
    }

    mostrarLista() {
        const lista = document.getElementById("lista-productos");
        lista.innerHTML = "";
        this.productos.forEach((producto, index) => {
            let li = document.createElement("li");

            let spanNombre = document.createElement("span");
            spanNombre.textContent = producto.nombre;
            li.appendChild(spanNombre);
            
            let spanPrecio = document.createElement("span");
            spanPrecio.textContent = `C$${producto.precio}`;
            li.appendChild(spanPrecio);
            
            let botonEliminar = document.createElement("button");
            botonEliminar.innerHTML = '<img src="Imagenes/iconos/Eliminar.png" alt="Eliminar">';
            botonEliminar.classList.add("boton-eliminar");
            botonEliminar.onclick = () => this.eliminar(index);
            li.appendChild(botonEliminar);
            
            let botonModificar = document.createElement("button");
            botonModificar.innerHTML = '<img src="Imagenes/iconos/Editar.png" alt="Modificar">';
            botonModificar.classList.add("boton-modificar");
            botonModificar.onclick = () => this.modificar(index);
            li.appendChild(botonModificar);

            lista.appendChild(li);
        });
        document.getElementById("total").textContent = this.calcularTotal();
    }

}

const carrito = new Carrito();

function agregarProducto() {
    const nombre = document.getElementById("producto").value;
    const precio = document.getElementById("precio").value;
    
    if (nombre && precio) {
        const nuevoProducto = new Producto(nombre, precio);
        carrito.agregar(nuevoProducto);
        
        document.getElementById("producto").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("boton-agregar").textContent = "Agregar";
    } else {
        alert("Por favor, ingrese un nombre y un precio válido.");
    }
}
