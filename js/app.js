const elementos = document.getElementById(`carrito-contenedor`)
const carrito = document.getElementById("#carritoVacio");
let botonesAgregar = document.querySelectorAll(".btn-primary");

// Traigo los productos desde json
fetch("/data.json")
.then((resp)=>resp.json())
.then((data)=>{

    // Tabla de productos
    data.forEach((prod)=>{
        const div = document.createElement("div")
        div.innerHTML=`<div class="card" style="width: 18rem;">
                        <img src="${prod.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${prod.nombre}</h5>
                            <p class="card-text">Precio:$${prod.precio}</p>
                            <button type="button" class="btn btn-primary" id="${prod.id}">Agregar</button>
                        </div>
                    </div>`
        elementos.appendChild(div)
    })
    // Agrego la funcion de agregar al carrito
    const boton = document.querySelectorAll(".btn-primary");
    boton.forEach((card) => {
    card.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
        });
    });
    
    // Un array vacio para el carrito
    let articulosCarrito = [];
    
    function leerDatosProducto(producto) {
        const infoProducto = {
            titulo: producto.querySelector(".card-title").textContent,
            precio: producto.querySelector(".card-text").textContent,
        };
    
        articulosCarrito = [...articulosCarrito, infoProducto];
    
        carritoHTML();
    }
    
    function carritoHTML() {
    
        limpiarHTML()
        // Asi se muestra el producto en el carrito
        articulosCarrito.forEach((prod) => {
            const row = document.createElement("p");
            row.innerHTML = `
            <div class="container">
            <h5>${prod.titulo}</h5>
            <p>${prod.precio}</p>
            <button class="btn btn-danger" id="eliminar">Eliminar</button>
            </div>
            `;
            carrito.appendChild(row);
        });
    }

    // Filtrado de productos
    const inputSearch = document.getElementById(`inputSearch`)
    const filtrarProductos = ()=>{
        let parametro = inputSearch.value.trim()
        let resultado = resp.filter(data => data.nombre.includes(parametro(data)))
        if (resultado.length > 0){
            cargarProductos(resultado)
        }
    }
    // Ejecucion de filtrado de productos
    inputSearch.addEventListener("search", () => {
        filtrarProductos()
    })    

    function limpiarHTML() {
        carrito.innerHTML = "";
    }

    carrito.addEventListener(`click`, eliminar)
    
    function eliminar (e) {
            if (e.target.classList.contains("btn-danger")) {
                let prodID = e.target.getAttribute("id");
                articulosCarrito = articulosCarrito.filter(
                (prod) => prod.id !== prodID
                );
                limpiarHTML()
            }
    }

//     // let carritoArt = JSON.parse(localStorage.getItem("carrito")) || []
//     // if (carritoArt.length > 0) {
//     //     imprimirCarrito()
//     // }
})

// // Plasmo los productos en la pagina

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
