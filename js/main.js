// const stockProductos = []

// const contenedor = document.getElementById(`carrito-contenedor`)
// cards.addEventListener('click', e => { addCarrito(e) });
// items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// // Traigo los productos desde json
// const fetchData = async () => {
//     const res = await fetch("json/data.json");
//     const data = await res.json()
//     agregarTarjetas(data)
// }

//     // Tabla de productos
// // function agregarTarjetas(data){
// //     data.forEach((prod)=>{
// //         const {id, nombre, precio, img} = prod
// //         contenedor.innerHTML=`<div class="card" style="width: 18rem;">
// //             <img src="${prod.img}" class="card-img-top" alt="...">
// //                 <div class="card-body">
// //                     <h5 class="card-title">${prod.nombre}</h5>
// //                     <p class="card-text">Precio:$${prod.precio}</p>
// //                     <button onclick="agregarProducto(${prod.id})" type="button" class="btn btn-primary button">Agregar</button>
// //                 </div>
// //         </div>`
// //     contenedor.appendChild(div)
// //     })
// // }
// const agregarTarjetas = data => {
//     data.forEach(item => {
//         templateCard.querySelector('h5').textContent = item.nombre
//         templateCard.querySelector('p').textContent = item.precio
//         templateCard.querySelector('button').dataset.id = item.id
//         const clone = templateCard.cloneNode(true)
//         fragment.appendChild(clone)
//     })
//     cards.appendChild(fragment)
// }

// function agregarProducto(id){
//     console.log(id)
// }