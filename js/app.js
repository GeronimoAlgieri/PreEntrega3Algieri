const productos = document.getElementById(`carrito-contenedor`)

// tabla de productos
fetch("/data.json")
.then((resp)=>resp.json())
.then((data)=>{

    data.forEach((prod)=>{
    const div = document.createElement("div")
    div.innerHTML=`<div class="card" style="width: 18rem;">
                    <img src="${prod.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">Precio:$${prod.precio}</p>
                        <button type="button" class="btn btn-primary">Agregar</button>
                    </div>
                </div>`
    productos.appendChild(div)
    })
})

// Plasmo los productos en la pagina

const cargarProductos = (array)=> {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += armarTabla(prod)
        });
        productos.innerHTML = tabla
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

// function eliminarProducto(e) {
//     if (e.target.classList.contains("btn-danger")) {
//       let productoID = e.target.getAttribute("id");
//       articulosCarrito = articulosCarrito.filter(
//         (prod) => prod.id !== prodID
//       );
//       carritoHTML();
//     }
//   }

