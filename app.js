document.addEventListener('DOMContentLoaded', (event) => {
    const inputProducto = document.getElementById('producto');
    const inputPrecio = document.getElementById('precio');
    const botonAgregar = document.getElementById('boton-agregar');
    const toggleSwitch = document.getElementById('toggle');
    const modeIndicator = document.getElementById('mode-indicator');
    const categoriaBtn = document.getElementById('categoria-btn');
    const menuCategorias = document.getElementById('menu-categorias');
    const menuProductos = document.getElementById('menu-productos');
    const autocompleteMenu = document.createElement('ul');
    autocompleteMenu.classList.add('menu');
    autocompleteMenu.style.display = 'none';
    inputProducto.parentNode.appendChild(autocompleteMenu);

    const categorias = {
        "Frutas": [
            { nombre: "Manzana", precio: 25 },
            { nombre: "Banana", precio: 5 },
            { nombre: "Naranja", precio: 15 },
            { nombre: "Sandía", precio: 80 },
            { nombre: "Melón", precio: 60 },
            { nombre: "Papaya", precio: 50 },
            { nombre: "Fresa Lb", precio: 90 },
            { nombre: "Uvas Lb", precio: 120 },
            { nombre: "Mango", precio: 35 },
            { nombre: "Piña", precio: 55 }
        ],
        "Verduras": [
            { nombre: "Zanahoria Lb", precio: 20 },
            { nombre: "Lechuga", precio: 30 },
            { nombre: "Tomate Lb", precio: 25 },
            { nombre: "Cebolla Lb", precio: 20 },
            { nombre: "Pimiento", precio: 18 },
            { nombre: "Papa Lb", precio: 25 },
            { nombre: "Repollo", precio: 35 },
            { nombre: "Chiltoma", precio: 15 },
            { nombre: "Pepino", precio: 20 },
            { nombre: "Ajo Lb", precio: 150 }
        ],
        "Lácteos": [
            { nombre: "Leche", precio: 40 },
            { nombre: "Queso Lb", precio: 120 },
            { nombre: "Yogur", precio: 35 },
            { nombre: "Mantequilla Lb", precio: 50 },
            { nombre: "Crema Lb", precio: 60 },
            { nombre: "Cuajada Lb", precio: 80 },
            { nombre: "Leche en polvo", precio: 90 },
            { nombre: "Helado", precio: 45 },
            { nombre: "Kéfir", precio: 70 },
            { nombre: "Flan", precio: 55 }
        ],
        "Carnes": [
            { nombre: "Pollo Lb", precio: 60 },
            { nombre: "Res Lb", precio: 140 },
            { nombre: "Cerdo Lb", precio: 100 },
            { nombre: "Pescado Lb", precio: 90 },
            { nombre: "Chorizo Lb", precio: 110 },
            { nombre: "Carne molida Lb", precio: 130 },
            { nombre: "Costilla Lb", precio: 125 },
            { nombre: "Pechuga Lb", precio: 95 },
            { nombre: "Lomo de cerdo Lb", precio: 115 },
            { nombre: "Salchicha Lb", precio: 85 }
        ],
        "Bebidas": [
            { nombre: "Jugo de naranja", precio: 50 },
            { nombre: "Coca Cola", precio: 45 },
            { nombre: "Café", precio: 20 },
            { nombre: "Té", precio: 30 },
            { nombre: "Chocolate caliente", precio: 40 },
            { nombre: "Batido de frutas", precio: 55 },
            { nombre: "Refresco natural", precio: 35 },
            { nombre: "Agua embotellada", precio: 15 },
            { nombre: "Energizante", precio: 75 },
            { nombre: "Limonada", precio: 25 }
        ],
        "Granos Básicos": [
            { nombre: "Arroz Lb", precio: 20 },
            { nombre: "Frijoles Lb", precio: 30 },
            { nombre: "Maíz Lb", precio: 15 },
            { nombre: "Lentejas Lb", precio: 25 },
            { nombre: "Garbanzo Lb", precio: 35 },
            { nombre: "Chía Lb", precio: 90 },
            { nombre: "Avena Lb", precio: 45 },
            { nombre: "Trigo Lb", precio: 50 },
            { nombre: "Cebada Lb", precio: 40 },
            { nombre: "Quinoa Lb", precio: 120 }
        ],
        "Panadería": [
            { nombre: "Pan francés", precio: 5 },
            { nombre: "Rosquillas", precio: 50 },
            { nombre: "Torta", precio: 200 },
            { nombre: "Donas", precio: 30 },
            { nombre: "Galletas", precio: 25 },
            { nombre: "Pan dulce", precio: 35 },
            { nombre: "Croissant", precio: 40 },
            { nombre: "Pan integral", precio: 45 },
            { nombre: "Empanada", precio: 55 },
            { nombre: "Queque", precio: 75 }
        ],
        "Condimentos": [
            { nombre: "Sal", precio: 10 },
            { nombre: "Azúcar", precio: 15 },
            { nombre: "Pimienta", precio: 20 },
            { nombre: "Orégano", precio: 25 },
            { nombre: "Canela", precio: 30 },
            { nombre: "Clavo de olor", precio: 35 },
            { nombre: "Comino", precio: 40 },
            { nombre: "Curry", precio: 50 },
            { nombre: "Pimentón", precio: 55 },
            { nombre: "Achiote", precio: 60 }
        ],
        "Abarrotes": [
            { nombre: "Aceite", precio: 120 },
            { nombre: "Vinagre", precio: 40 },
            { nombre: "Harina", precio: 30 },
            { nombre: "Pasta", precio: 35 },
            { nombre: "Salsa de tomate", precio: 25 },
            { nombre: "Atún", precio: 50 },
            { nombre: "Sardina", precio: 45 },
            { nombre: "Mayonesa", precio: 55 },
            { nombre: "Mostaza", precio: 60 },
            { nombre: "Sopa instantánea", precio: 20 }
        ]
    };

    const productos = Object.values(categorias).flat();

    categoriaBtn.addEventListener('click', () => {
        menuCategorias.innerHTML = '';
        for (let categoria in categorias) {
            let li = document.createElement('li');
            li.textContent = categoria;
            li.addEventListener('click', () => {
                mostrarProductos(categoria);
                menuCategorias.style.display = 'none'; // Ocultar el menú de categorías
            });
            menuCategorias.appendChild(li);
        }
        menuCategorias.style.display = 'block';
    });

    function mostrarProductos(categoria) {
        menuProductos.innerHTML = '';
        categorias[categoria].forEach(producto => {
            let li = document.createElement('li');
            li.textContent = producto.nombre;
            li.addEventListener('click', () => {
                inputProducto.value = producto.nombre;
                inputPrecio.value = producto.precio;
                menuProductos.style.display = 'none';
                botonAgregar.focus(); // Enfocar el botón de agregar
            });
            menuProductos.appendChild(li);
        });
        menuProductos.style.display = 'block';
    }

    inputProducto.addEventListener('input', function(event) {
        const value = event.target.value.toLowerCase();
        autocompleteMenu.innerHTML = '';
        if (value) {
            const filteredProductos = productos.filter(producto => producto.nombre.toLowerCase().includes(value));
            filteredProductos.forEach(producto => {
                let li = document.createElement('li');
                li.textContent = producto.nombre;
                li.addEventListener('click', () => {
                    inputProducto.value = producto.nombre;
                    inputPrecio.value = producto.precio;
                    autocompleteMenu.style.display = 'none';
                    botonAgregar.focus(); // Enfocar el botón de agregar
                });
                autocompleteMenu.appendChild(li);
            });
            autocompleteMenu.style.display = 'block';
        } else {
            autocompleteMenu.style.display = 'none';
        }
    });

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