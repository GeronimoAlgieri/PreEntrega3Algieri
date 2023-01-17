const elementos = document.getElementById(`carrito-contenedor`)

// Traigo los productos desde json
fetch("/data.json")
.then((resp)=>resp.json())
.then((data)=>renderizar(data))

    // Tabla de productos
function renderizar(data){
    data.forEach((prod)=>{
        const div = document.createElement("div")
        div.innerHTML=`<div class="card" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Precio:$${prod.precio}</p>
                    <button type="button" class="btn btn-primary button" id="${prod.id}">Agregar</button>
                </div>
        </div>`
    elementos.appendChild(div)
    })

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

    // Agrego la funcion de agregar al carrito
    const button = document.querySelectorAll(".button");
    button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
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
        leerDatosProducto(e.target.parentElement);
        });
        // localStorage.setItem("productos-en-carrito", JSON.stringify(articulosCarrito))
    });
}
// Filtrado de productos
const inputSearch = document.getElementById(`inputSearch`)
.then(()=>{
    const filtrarProductos = ()=>{
        let parametro = inputSearch.value.trim()
        let resultado = resp.filter(data => data.nombre.includes(parametro(data)))
        if (resultado.length > 0){
            cargarProductos(resultado)
        }
    }
    inputSearch.addEventListener("search", () => {
        filtrarProductos()
    }) 
    
})
// Ejecucion de filtrado de productos
// inputSearch.addEventListener("search", () => {
//     filtrarProductos()
// }) 
    
    // Un array vacio para el carrito
let articulosCarrito = [];
    
    function leerDatosProducto(e, productos) {
    const producto = productos.find(p => p.id === e.target.id)
    
    articulosCarrito.push(producto)




//     const infoProducto = {
//     titulo: producto.querySelector(".card-title").textContent,
//     precio: producto.querySelector(".card-text").textContent,
//     };
// articulosCarrito = [...articulosCarrito, infoProducto];
    
carritoHTML();
}
const carrito = document.getElementById("#carritoVacio");

function carritoHTML() {
    carrito.innerHTML = "";
    limpiarHTML()
    // Asi se muestra el producto en el carrito
    articulosCarrito.forEach((prod) => {
        const row = document.createElement("div");
        row.innerHTML = `
        <div class="container">
            <h5>${prod.titulo}</h5>
            <p>${prod.precio}</p>
            <button class="btn btn-danger" id="${prod.id}">Eliminar</button>
        </div>
        `;
        carrito.appendChild(row);
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


carrito.addEventListener(`click`, eliminar)
    
function eliminar (e) {
    articulosCarrito = articulosCarrito.filter(prod => prod.id !== e.target.id);
    carritoHTML()
}



//     // let carritoArt = JSON.parse(localStorage.getItem("carrito")) || []
//     // if (carritoArt.length > 0) {
//     //     imprimirCarrito()
//     // }

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
//   }