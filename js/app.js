// Un array vacio para el carrito
let carrito = [];
// let total = 0
const elementos = document.getElementById(`carrito-contenedor`)

document.addEventListener("keyup", e=>{

    if (e.target.matches("#inputSearch")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".card").forEach(elemento =>{
            elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?elemento.classList.remove("filtro")
                :elemento.classList.add("filtro")
        })
    }
}) 

document.addEventListener('DOMContentLoaded', e => { 
    fetchData() 
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carritoHTML()
    }
});

// Traigo los datos de json 
const fetchData = async () => {
    const res = await fetch('./data.json');
    const data = await res.json()
    renderizar(data)
}

    // Tabla de productos
function renderizar(productos){
    productos.forEach((prod)=>{
        const div = document.createElement("div")
        div.innerHTML=`<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Precio:$${prod.precio}</p>
                    <button type="button" class="btn btn-primary btn-comprar" id="${prod.id}">Agregar</button>
                </div>
        </div>`
    elementos.appendChild(div)
    })
    // Agrego la funcion de agregar al carrito
    const botonComprar = document.querySelectorAll(".btn-comprar");
    botonComprar.forEach(btn => {
        btn.addEventListener("click", (e)=> agregarAlCarrito(e, productos))
    })
}

function agregarAlCarrito(e, prods){
    const prodElegidos = prods.find(el => el.id === parseInt(e.target.id))
    carrito.push(prodElegidos)
    carritoHTML()
    notificar()
}

function notificar(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se agrego al carrito',
        showConfirmButton: false,
        timer: 1500
    })
}

const totalCompra = document.getElementById(`totalCompra`)

function carritoHTML() {
    agregadoAlCarrito.innerHTML = "";
    // Asi se muestra el producto en el carrito
    carrito.forEach((prod) => {
        const row = document.createElement("div");
        row.innerHTML = `
        <div class="card w-75 mb-3">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">Precio: $${prod.precio}</p>
                <button onClick = "eliminarDelCarrito()" class="btn btn-danger btn-eliminar" id="${prod.id}">Eliminar</button>
            </div>
        </div>
        `;
        agregadoAlCarrito.appendChild(row);
    });
    // calcularTotalCompra()
    actualizarTotal()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((prod) => prod.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    carritoHTML()
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El producto se elimino del carrito',
        showConfirmButton: false,
        timer: 1500
    })
};;

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    carritoHTML();
});



// const calcularTotalCompra = () => {
//     let total = 0;
//     carrito.forEach((prod) => {
//         total += prod.precio * prod.cantidad;
//     });
//     totalCompra.innerHTML = total;
// };
function actualizarTotal() {
    const totalCalculado = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    totalCompra.textContent = "$" + totalCalculado;
}


// Plasmo los productos en el HTML
const cargarProductos = (array)=> {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += armarTabla(prod)
        });
        elementos.innerHTML = tabla
    }
}
cargarProductos(elementos)


const agregadoAlCarrito = document.getElementById(`carritoVacio`);

function limpiarHTML(){
    carrito.innerHTML = ""
}

const procesaCompra = document.getElementById(`continuarCompra`)

if(procesaCompra){
    procesaCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else {
        Swal.fire({
            title: "Ve hasta abajo de la pagina para finalizar la compra",
            text: "Completa el formulario",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
        }
    });
}

let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let apellido = document.querySelector("#apellido")

let form = document.querySelector("#datosCliente");

let info = document.querySelector(".info");

// Pinto un alert con nombre y apellido que ingrese el usuario
const pintarAlert = form.addEventListener("submit", function (e) {
    e.preventDefault();
    info.innerHTML = `
    <div class="alert alert-success" role="alert">
        <h5> Muchas gracias ${nombre.value} ${apellido.value} por tu compra.</h5>
        <h5> Para finalizar la compra te contactaremos a este Mail: ${email.value}</h5>
    </div>`;
});