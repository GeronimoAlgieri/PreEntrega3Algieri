// let nombre = (prompt("Ingrese su nombre"));
// let apellido = (prompt("Ingrese su apellido"));
// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 16) {
//   alert("Bienvenido " + nombre + " " + apellido + " puedes usar esta pagina")
// } else {
//   alert(nombre + " " + apellido + " no puedes usar esta pagina")
// }

// const date = new Date(prompt("Ingrese fecha de registro. mes/dia/año"));
// const [month, day, year] = [date.getMonth(), date.getDay(), date.getFullYear()];

// alert("Te registraste el " + date)

// const carrito = [
//   {nombre: "Remera Mercedes Benz", precio:10000, disponible: "Hay stock"},
//   {nombre: "Gorra Mercedes Benz",precio: 7000, disponible: "No hay stock"},
//   {nombre: "Campera Mercedes Benz",precio: 15000, disponible: "No hay stock"},
//   {nombre: "Remera Red Bull",precio: 10000, disponible: "Hay stock"},
//   {nombre: "Gorra Red Bull",precio: 7000, disponible: "Hay stock"},
//   {nombre: "Campera Red Bull",precio: 15000, disponible: "Hay stock"},
// ];

// carrito.forEach((producto) => {
//   console.log (producto.nombre)
//   console.log (producto.precio)
//   console.log (producto.disponible)
// }) 

// console.log("")
// console.log("Filtro de precios")

// const porPrecio = carrito.filter((p) => p.precio <= 10000);
// console.log(porPrecio);

// console.log("Filtro de disponible")

// const porStock = carrito.filter((p) => p.disponible.includes(`Hay`) )
// console.log(porStock)

// const totalCarrito = carrito.reduce ((accum,p) => accum + p.precio, 0 )
// console.log("La suma de todos los productos es de: " + totalCarrito)

// function Envios(provincia, costo){
//   this.provincia = provincia
//   this.costo = costo
// }

// console.log("Precios de envios")

// const lugar = new Envios("Cordoba", 1000)
// const lugar1 = new Envios("Buenos Aires", 500)
// const lugar2 = new Envios("Misiones", 2000)
// const lugar3 = new Envios("Mendoza", 1200)

// console.log(lugar)
// console.log(lugar1)
// console.log(lugar2)
// console.log(lugar3)

// let precioProducto = parseInt(prompt("Ingrese el valor del producto seleccionado"))
// let precioEnvio = parseInt(prompt("Ingrese el valor del envio donde desee que llegue el producto"))

// function precioTotal(precioProducto,precioEnvio){
//   return precioProducto + precioEnvio
// }

// let resultado = precioTotal(precioProducto,precioEnvio)

// alert("El valor del producto mas el envio es de: $" + resultado)

// const viajes = ["Doha, Qatar", "Madrid, España", "Roma, Italia"]
// const aJson = JSON.stringify(viajes)
// localStorage.setItem("Viajes", aJson)

// const viajesArray = JSON.parse(localStorage.getItem("Viajes"))
// viajesArray.push("Berlin, Alemania")
// localStorage.setItem("Viajes", JSON.stringify(viajesArray))

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
    
    limpiarHTML();
    
    articulosCarrito.forEach((prod) => {
        const row = document.createElement("p");
        row.innerHTML = `
        <div class="container">
        <h5>${prod.titulo}</h5>
        <p>${prod.precio}</p>
        <button class="btn btn-danger">Eliminar</button>
        </div>
        `;
        carrito.appendChild(row);
    });
}

function limpiarHTML() {
    carrito.innerHTML = "";
}

// Eliminar producto del carrito

const vaciarCarritoBoton = document.querySelector(".btn btn-danger")
vaciarCarritoBoton.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    contenedorCarrito.innerHTML = "";
}
carritoHTML()

let nombre = document.querySelector("#nombre")
let email = document.querySelector("#email")

nombreForm.addEventListener("input", function () {
    // console.log(nombreForm.value);
    if (nombreForm.value === "") {
        e.preventDefault
        info.innerHTML = `
        <div class="alert alert-danger" role="alert">
        <h5>Ingrese un nombre valido</h5>
        `
    }
});

