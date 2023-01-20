// Un array vacio para el carrito
let carrito = [];
// let total = 0
const elementos = document.getElementById(`carrito-contenedor`)

// Filtrado de productos en un input
function searchFilter(input, selector){
    document.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            console.log(e.target.value);
            document.querySelectorAll(selector).forEach(element =>
                (element.textContent.toLowerCase().includes(e.target.value))? element.classList.remove("filter"): element.classList.add("filter"))
        }
    })
}

searchFilter(".search", ".card-title")

document.addEventListener('DOMContentLoaded', e => { 
    fetchData() 
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carritoHTML()
    }
});

// Traigo los datos de json 
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
                    <p class="card-text">Cantidad: ${prod.cantidad}</p>
                    <button type="button" class="btn-compra btn btn-primary button" id="${prod.id}">Agregar</button>
                </div>
        </div>`
    elementos.appendChild(div)
    })
    // Agrego la funcion de agregar al carrito
    const button = document.querySelectorAll(".btn-compra");
    button.forEach((data) => {
    data.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
        notificar()
        limpiarHTML()
        });
    // localStorage.setItem("productos-en-carrito", JSON.stringify(articulosCarrito))
    }); 
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

function leerDatosProducto(producto) {
    
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        precio: producto.querySelector(".card-text").textContent,
        id: producto.querySelector('btn-compra').dataset.id,
        // cantidad: 1
    };
    // if (carrito.hasOwnProperty(producto.id)) {
    //     producto.cantidad = carrito[producto.id].cantidad + 1
    // }
    carrito = [...carrito, infoProducto];
    
    carritoHTML();
}

const totalCompra = document.getElementById(`totalCompra`)

function carritoHTML() {
    agregadoAlCarrito.innerHTML = "";
    // limpiarHTML()
    // Asi se muestra el producto en el carrito
    carrito.forEach((prod) => {
        const row = document.createElement("div");
        row.innerHTML = `
        <div class="card w-75 mb-3">
            <div class="card-body">
                <h5 class="card-title">${prod.titulo}</h5>
                <p class="card-text">${prod.precio}</p>
                <p class="card-text">Cantidad: ${prod.cantidad}</p>
                <button onClick = "eliminarDelCarrito()" class="btn btn-danger btn-eliminar" id="${prod.id}">Eliminar</button>
            </div>
        </div>
        `;
        agregadoAlCarrito.appendChild(row);
    });
    calcularTotalCompra()
    // actualizarTotal()
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



const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((prod) => {
        total += prod.precio * prod.cantidad;
    });
    totalCompra.innerHTML = total;
};
// function actualizarTotal() {
//     const totalCalculado = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
//     totalCompra.textContent = "$" + totalCalculado;
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


const agregadoAlCarrito = document.getElementById(`carritoVacio`);

function limpiarHTML(){
    carrito.innerHTML = ""
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
        location.href = "checkout.html";
        }
    });
}
    // function datosCliente(){
    //     const { value: formValues } = await Swal.fire({
    //         title: 'Multiple inputs',
    //         html:
    //           '<input id="swal-input1" class="swal2-input">' +
    //           '<input id="swal-input2" class="swal2-input">',
    //         focusConfirm: false,
    //         preConfirm: () => {
    //           return [
    //             document.getElementById('swal-input1').value,
    //             document.getElementById('swal-input2').value
    //           ]
    //         }
    //       })
          
    //       if (formValues) {
    //         Swal.fire(JSON.stringify(formValues))
    //       }

    // }

let email = document.getElementById(`email`)
let nombre = document.getElementById(`nombre`)
let apellido = document.getElementById(`apellido`)

email.addEventListener("input", function (){

})

nombre.addEventListener("input", function (){
    
})

apellido.addEventListener("input", function (){
    
})

let form = document.getElementById(`datosCliente`)

let alert = document.querySelector(".pintarAlert")

const pinta = form.addEventListener("submit", () => {
    e.preventDefault();
    alert.innerHTML = `
<div class="alert alert-warning" role="alert">
<h5> Muchas gracias ${nombre.value} ${apellido.value} por tu compra.</h5>
<h5> Para finalizar la compra te contactaremos por este contacto ${email.value}</h5>
</div>`
});