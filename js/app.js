// Un array vacio para el carrito
let carrito = [];
let total = 0
const elementos = document.getElementById(`carrito-contenedor`)


function searchFilter(input, selector){
    document.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            console.log(e.target.value);
            document.querySelectorAll(selector).forEach(element =>
                (element.textContent.toLowerCase().includes(e.target.value))? element.classList.remove("filter"): element.classList.add("filter"))
        }
    })
}

searchFilter(".search", ".card")

document.addEventListener('DOMContentLoaded', e => { 
    fetchData() 
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        llenarCarrito()
    }
});

const fetchData = async () => {
    const res = await fetch('data.json');
    const data = await res.json()
    renderizar(data)
}

// Traigo los productos desde json
// fetch("/data.json")
// .then((resp)=>resp.json())
// .then((data)=>renderizar(data))

    // Tabla de productos
function renderizar(data){
    data.forEach((prod)=>{
        const div = document.createElement("div")
        div.innerHTML=`<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Precio:$${prod.precio}</p>
                    <button type="button" class="btn-compra btn btn-primary button">Agregar</button>
                </div>
        </div>`
    elementos.appendChild(div)
    })
    // Agrego la funcion de agregar al carrito
    const button = document.querySelectorAll(".btn-compra");
    button.forEach((data) => {
    data.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
        // notificar()
        });
    // localStorage.setItem("productos-en-carrito", JSON.stringify(articulosCarrito))
    }); 
}

function notificar(){
    Toastify({
        text: "El producto se agrego al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

function leerDatosProducto(producto) {
// const producto = productos.find(p => p.id === e.target.id)
    
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        precio: producto.querySelector(".card-text").textContent,
    };
    carrito = [...carrito, infoProducto];
    
    carritoHTML();
}

// const botonCompra = document.querySelectorAll(".btn.compra")
// botonCompra.forEach(btn => btn.addEventListener("click", (e)=> agregarAlCarrito(e, data)))

// function agregarAlCarrito(evento) {
//     carrito.push(evento.target.getAttribute('marcador'))
//     carritoHTML();
// }




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
    
function eliminar(e) {
    if (e.target.classList.contains("bnt-eliminar")) {
        let productoID = e.target.getAttribute("id");
        carrito = carrito.filter(
            (producto) => producto.id !== productoID
        );
    carritoHTML();
    }
}

function limpiarHTML(){
    carrito.innerHTML = ""
}

const vaciarCarrito = document.getElementById(`vaciarCarrito`)

vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    carritoHTML();
});

// Filtrado de productos
// const inputSearch = document.getElementById(`inputSearch`)
    

// document.addEventListener("DOMContentLoaded", () => {
//     articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

//     carritoHTML();
//     document.querySelector("#activarFuncion").click(procesarPedido);
// });

const agregadoAlCarrito = document.getElementById(`carritoVacio`);

function carritoHTML() {
    // agregadoAlCarrito.innerHTML = "";
    limpiarHTML()
    // Asi se muestra el producto en el carrito
    carrito.forEach((prod) => {
        const row = document.createElement("div");
        row.innerHTML = `
        <div class="container">
            <h5>${prod.titulo}</h5>
            <p>${prod.precio}</p>
            <button class="btn btn-danger btn-eliminar" id="${prod.id}">Eliminar</button>
        </div>
        `;
        agregadoAlCarrito.appendChild(row);
    });
}

// Filtrado de productos
// const inputSearch = document.getElementById(`inputSearch`)
// const filtrarProductos = ()=>{
//     let parametro = inputSearch.value.trim()
//     let resultado = resp.filter(data => data.nombre.includes(parametro(data)))
//     if (resultado.length > 0){
//         cargarProductos(resultado)
//     }
// }
// // Ejecucion de filtrado de productos
// inputSearch.addEventListener("search", () => {
//     filtrarProductos()
// })    

//     // let carritoArt = JSON.parse(localStorage.getItem("carrito")) || []
//     // if (carritoArt.length > 0) {
//     //     imprimirCarrito()
//     // }


// const procesaCompra = document.getElementById(`continuarCompra`)

// if (procesarCompra) {
//     procesarCompra.addEventListener("click", () => {
//       if (carrito.length === 0) {
//         Swal.fire({
//           title: "¡Tu carrito está vacio!",
//           text: "Compra algo para continuar con la compra",
//           icon: "error",
//           confirmButtonText: "Aceptar",
//         });
//       } else {
//         location.href = "checkout.html";
//       }
//     });
// }