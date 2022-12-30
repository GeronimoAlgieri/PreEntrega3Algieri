// Login y json

// let user = document.querySelector("#username")
// let pass = document.querySelector("#pass")
// let boton = document.querySelector("#button")

// const logear = button.addEventListener("click", function(e){
//     e.preventDefault()
//     window.location = "productos.html"
//     const data = {
//         user: username.value,
//         pass: pass.value
//     }
//     console.log(data)
// })
// Array de productos para guardar al localstorage
const modelos = ["Sudadera con Capucha, Scuderia Mercedes AMG","Remera, Scuderia Mercedes AMG","Gorra de béisbol, Scuderia Mercedes AMG","Chaqueta acolchada ligera, Scuderia Mercedes AMG","Remera Polo, equipo Red Bull Racing","Gorra de béisbol, Scuderia Red Bull Racing","Sudadera con capucha, Scuderia Red Bull Racing","Softshell, Scuderia Red Bull Racing","Remera, Scuderia Ferrari Team Carlos Sainz","Sudadera con capucha negra, Scuderia Ferrari","Remera, Scuderia Ferrari Team Charles Leclerc","Sudadera con capucha, Scuderia Ferrari"]
// // Guardar en LocalStorage

const aJson = JSON.stringify(modelos)
localStorage.setItem("Modelos de ropa", aJson)

const contenedorProductos = document.getElementById(`contenedor-productos`)

// tabla de productos

const armarTabla = (prod) =>{
    return `<div class="card" style="width: 18rem;">
                <img src="${prod.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Precio:$${prod.precio}</p>
                    <button type="button" class="btn btn-primary">Agregar</button>
                </div>
            </div>`
}

// Plasmo los productos en la pagina

const cargarProductos = (array)=> {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += armarTabla(prod)
        });
        contenedorProductos.innerHTML = tabla
    }
}
cargarProductos(productos)

// Filtrado de productos

const filtrarProductos = ()=>{
    let parametro = inputSearch.value.trim()
    let resultado = productos.filter(prod => prod.nombre.includes(parametro))
    if (resultado.length > 0){
        cargarProductos(resultado)
    }
}

inputSearch.addEventListener("search", () => {
    filtrarProductos()
})

// Agregado de productos al carrito

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
    });
});

let articulosCarrito = [];

function leerDatosProducto(producto) {
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        precio: producto.querySelector(".card-text").textContent,
    };

    articulosCarrito = [...articulosCarrito, infoProducto];

    carritoHTML();
}

const carrito = document.querySelector("#carrito");

function carritoHTML() {
    
    limpiarHTML()
    
    articulosCarrito.forEach((prod) => {
        const row = document.createElement("p");
        row.innerHTML = `
        <div class="container">
        <h5>${prod.titulo}</h5>
        <p>${prod.precio}</p>
        <button onclick="vaciarCarrito(${prod.id})" class="btn btn-danger" id="eliminar">Eliminar</button>
        </div>
        `;
        carrito.appendChild(row);
    });
}

function limpiarHTML() {
    carrito.innerHTML = "";
}

// Eliminar producto del carrito

const vaciarCarrito = (prodId) => {
    const item = articulosCarrito.find((prod) => prod.titulo === prodId)
    const indice = articulosCarrito.indexOf(item)
    articulosCarrito.splice(indice, 1)
    
    limpiarHTML()
}


// let nombre = document.querySelector("#nombre")
// let email = document.querySelector("#email")

// nombre.addEventListener("input", function () {
//     if (nombre.value === "") {
//         e.preventDefault
//         info.innerHTML = `
//         <div class="alert alert-danger" role="alert">
//         <h5>Ingrese un nombre valido</h5>
//         `
//     }
// });

// email.addEventListener("input", function () {
//     if (email.value === "") {
//         e.preventDefault
//         info.innerHTML = `
//         <div class="alert alert-danger" role="alert">
//         <h5>Ingrese un nombre valido</h5>
//         `
//     }
// });

