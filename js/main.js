// Productos 

const productos = [

//  Coats

{
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "./img/coats/01.jpg",
    categoria: {

        nombre: "Coats",
        id: "coats"

    },
    precio: 1000

},
{
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "./img/coats/02.jpg",
    categoria: {

        nombre: "Coats",
        id: "coats"

    },
    precio: 1000

},
{
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "./img/coats/03.jpg",
    categoria: {

        nombre: "Coats",
        id: "coats"

    },
    precio: 1000

},
{
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "./img/coats/04.jpg",
    categoria: {

        nombre: "Coats",
        id: "coats"

    },
    precio: 1000

},
{
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "./img/coats/04.jpg",
    categoria: {

        nombre: "Coats",
        id: "coats"

    },
    precio: 1000

},

//Pants

{
    id: "Pantalon-01",
    titulo: "Pantalon 01",
    imagen: "./img/pants/01.jpg",
    categoria: {

        nombre: "Pants",
        id: "pants"

    },
    precio: 1000

},
{
    id: "Pantalon-02",
    titulo: "Pantalon 02",
    imagen: "./img/pants/02.jpg",
    categoria: {

        nombre: "Pants",
        id: "pants"

    },
    precio: 1000

},
{
    id: "Pantalon-03",
    titulo: "Pantalon 03",
    imagen: "./img/pants/03.jpg",
    categoria: {

        nombre: "Pants",
        id: "pants"

    },
    precio: 1000

},
{
    id: "Pantalon-04",
    titulo: "Pantalon 04",
    imagen: "./img/pants/04.jpg",
    categoria: {

        nombre: "Pants",
        id: "pants"

    },
    precio: 1000

},
{
    id: "Pantalon-05",
    titulo: "Pantalon 05",
    imagen: "./img/pants/05.jpg",
    categoria: {

        nombre: "Pants",
        id: "pants"

    },
    precio: 1000

},

//Shirts

{
    id: "Camisa-01",
    titulo: "Camisa 01",
    imagen: "./img/shirts/01.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-02",
    titulo: "Camisa 02",
    imagen: "./img/shirts/02.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-03",
    titulo: "Camisa 03",
    imagen: "./img/shirts/03.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-04",
    titulo: "Camisa 04",
    imagen: "./img/shirts/04.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-05",
    titulo: "Camisa 05",
    imagen: "./img/shirts/05.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-06",
    titulo: "Camisa 06",
    imagen: "./img/shirts/06.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-07",
    titulo: "Camisa 07",
    imagen: "./img/shirts/07.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},
{
    id: "Camisa-08",
    titulo: "Camisa 08",
    imagen: "./img/shirts/08.jpg",
    categoria: {

        nombre: "Shirts",
        id: "shirts"

    },
    precio: 1000

},

];

const contenedorproductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function loadproducts(productosElegidos) {

    contenedorproductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        </div>
        
        `;

        contenedorproductos.append(div);
    })

}

loadproducts(productos);

botonesCategorias.forEach(boton => {

   boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if(e.currentTarget.id != "todos"){
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 
        loadproducts(productosBoton);
    }else{
        loadproducts(productos);
    }

    


   })

})
