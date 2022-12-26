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


// const tbody = document.querySelector(".card-body")

// const armarTabla = (prod) => {
//     return `<div class="card" style="width: 18rem;">
//                 <img src="${prod.img}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5>${prod.nombre}</h5>
//                     <p>Precio:$${prod.precio}</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>`
// }

// const cargarProductos = (array)=>{
//     let tabla = ""
//     if (array.length > 0) {
//         array.forEach(prod =>{
//             tabla  += armarTabla(prod)
//         })
//         tbody.innerHTML = tabla
//     }
// }
// cargarProductos(productos)


let productos = [
    {id: 1, nombre: "Sudadera con capucha, Scuderia Mercedes AMG", precio: 32900, img: './img/sudadera-mercedes.jpg'},
    {id: 2, nombre: "Remera, Scuderia Mercedes AMG", precio: 16800, img: './img/remera-mercedes.jpg'},
    {id: 3, nombre: "Gorra de béisbol, Scuderia Mercedes AMG" , precio: 11900, img: './img/gorra-mercedes.jpg'},
    {id: 4, nombre: "Chaqueta acolchada ligera, Scuderia Mercedes AMG" , precio: 42000, img: './img/chaqueta-mercedes.jpg'},
    {id: 5, nombre: "Polo, equipo Red Bull Racing" , precio: 22400, img: './img/remera-redbull-polo.jpg'},
    {id: 6, nombre: "Gorra de béisbol, Scuderia Red Bull Racing" , precio: 10500, img: './img/gorra-redbull.jpg'},
    {id: 7, nombre: "Sudadera con capucha, Scuderia Red Bull Racing" , precio: 30450, img: './img/sudadera-redbull.jpg'},
    {id: 8, nombre: "Softshell, Scuderia Red Bull Racing" , precio: 42700, img: './img/chaqueta-redbull.jpg'},
    {id: 9, nombre: "Remera, Scuderia Ferrari Team Carlos Sainz" , precio: 19600, img: './img/remere-carlos.jpg'},
    {id: 10, nombre: "Sudadera con capucha, Scuderia Ferrari" , precio: 33250, img: './img/sudadera-ferrari.png'},
    {id: 11, nombre: "Remera, Scuderia Ferrari Team Charles Leclerc" , precio: 19600, img: './img/remera-charles.jpg'},
    {id: 12, nombre: "Sudadera con capucha, Scuderia Ferrari" , precio: 39900, img: './img/sudadera-ferrari.negro.jpg'}
]

const contenedorProductos = document.getElementById(`contenedor-productos`)

const armarTabla = (prod) =>{
    return `<div class="card" style="width: 18rem;">
                <img src="${prod.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Precio:$${prod.precio}</p>
                    <a href="#" class="btn btn-primary">Agregar</a>
                </div>
            </div>`
}

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