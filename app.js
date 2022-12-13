let nombre = (prompt("Ingrese su nombre"));
let apellido = (prompt("Ingrese su apellido"));
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 16) {
  alert("Bienvenido " + nombre + " " + apellido + " puedes usar esta pagina")
} else {
  alert(nombre + " " + apellido + " no puedes usar esta pagina")
}

const date = new Date(prompt("Ingrese fecha de registro. mes/dia/año"));
const [month, day, year] = [date.getMonth(), date.getDay(), date.getFullYear()];

alert("Te registraste el " + date)

const carrito = [
  {nombre: "Remera Mercedes Benz", precio:10000, disponible: "Hay stock"},
  {nombre: "Gorra Mercedes Benz",precio: 7000, disponible: "No hay stock"},
  {nombre: "Campera Mercedes Benz",precio: 15000, disponible: "No hay stock"},
  {nombre: "Remera Red Bull",precio: 10000, disponible: "Hay stock"},
  {nombre: "Gorra Red Bull",precio: 7000, disponible: "Hay stock"},
  {nombre: "Campera Red Bull",precio: 15000, disponible: "Hay stock"},
];

carrito.forEach((producto) => {
  console.log (producto.nombre)
  console.log (producto.precio)
  console.log (producto.disponible)
}) 

console.log("")
console.log("Filtro de precios")

const porPrecio = carrito.filter((p) => p.precio <= 10000);
console.log(porPrecio);

console.log("Filtro de disponible")

const porStock = carrito.filter((p) => p.disponible.includes(`Hay`) )
console.log(porStock)

const totalCarrito = carrito.reduce ((accum,p) => accum + p.precio, 0 )
console.log("La suma de todos los productos es de: " + totalCarrito)

function Envios(provincia, costo){
  this.provincia = provincia
  this.costo = costo
}

console.log("Precios de envios")

const lugar = new Envios("Cordoba", 1000)
const lugar1 = new Envios("Buenos Aires", 500)
const lugar2 = new Envios("Misiones", 2000)
const lugar3 = new Envios("Mendoza", 1200)

console.log(lugar)
console.log(lugar1)
console.log(lugar2)
console.log(lugar3)

let precioProducto = parseInt(prompt("Ingrese el valor del producto seleccionado"))
let precioEnvio = parseInt(prompt("Ingrese el valor del envio donde desee que llegue el producto"))

function precioTotal(precioProducto,precioEnvio){
  return precioProducto + precioEnvio
}

let resultado = precioTotal(precioProducto,precioEnvio)

alert("El valor del producto mas el envio es de: $" + resultado)