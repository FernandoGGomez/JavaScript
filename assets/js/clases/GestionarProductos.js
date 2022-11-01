class GestionarProductos{

    
    iniciar(){

        productos = [
            {
                id: 1,
                nombre: "Intel Pentium Gold G7400",
                descripcion: "12th Generación. Socket S1700",
                precio: 8858,
                stock: 50,
                img: "pentiumGold.png",
                destacado: 1,
                marca: "Intel"
            },
            {
                id: 2,
                nombre: "Intel Celeron G6900 3.5GHz",
                descripcion: "12th Generación. Socket S1700",
                precio: 5907,
                stock: 50,
                img: "celeron.png",
                destacado: 1,
                marca: "Intel"
            },

            {
                id: 3,
                nombre: "Intel i3 12100F",
                descripcion: "12th Generación. Sin video. Socket S1700",
                precio: 8858,
                stock: 50,
                img: "i3.png",
                destacado: 1,
                marca: "Intel"
            },
            {
                id: 4,
                nombre: "Intel i3 12100",
                descripcion: "12th Generación. Video integrado. Socket S1700",
                precio: 23371,
                stock: 50,
                img: "i3.png",
                destacado: 1,
                marca: "Intel"
            },
            {
                id: 5,
                nombre: "AMD Ryzen 5 5600G",
                descripcion: "Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX de 6 núcleos y 4.4GHz de frecuencia con gráfica integrada",
                precio: 8858,
                stock: 50,
                img: "r5600x.jpg",
                destacado: 1,
                marca: "AMD"
            },
            {
                id: 6,
                nombre: "AMD Ryzen 9 5900X",
                descripcion: "Procesador gamer AMD Ryzen 9 5900X 100-100000061WOF de 12 núcleos y 4.8GHz de frecuencia",
                precio: 5907,
                stock: 50,
                img: "r5900x.jpg",
                destacado: 1,
                marca: "AMD"
            },

            {
                id: 7,
                nombre: "AMD Ryzen 7 5800X",
                descripcion: "Procesador Amd Ryzen 7 5800x 8 Nucleos 4.7ghz Am4",
                precio: 8858,
                stock: 50,
                img: "r5800x.jpg",
                destacado: 1,
                marca: "AMD"
            },
            {
                id: 8,
                nombre: "AMD Ryzen 5 5600X",
                descripcion: "Procesador gamer AMD Ryzen 5 5600X 100-100000065BOX de 6 núcleos y 4.6GHz de frecuencia",
                precio: 23371,
                stock: 50,
                img: "r5600x.jpg",
                destacado: 1,
                marca: "AMD"
            }];


            let productosDestacados = productos.filter(prod => prod.destacado == 1);
            this.cargarProductos(productosDestacados);

            this.mostrarCarrito();
            this.actualizarContador();
            this.BotonFiltrar();


    }


    cargarProductos(productos){

        const seccionProductos = document.getElementById("seccionProductos");
        seccionProductos.innerHTML = "";

        if(productos.length === 0){

            this.mostrarTituloProdcuctos("No hay productos disponibles");

        }else{

            productos.forEach(producto => {
                
                let prod = document.createElement("div");
                prod.classList.add("card-producto","col-12", "h200", "border", "rounded", "mt-3", "d-flex", "align-items-center", "p-3", "flex-row");
                prod.setAttribute("id","producto_" + producto.id);

                prod.innerHTML = `

                    <div class="divImg">
                    
                    <img class="img-fluid" src="./assets/img/${producto.img}">
                    
                    </div>
                    <div >
                    
                   <div>
                   <h3>${producto.nombre}</h3>

                   <p>${producto.descripcion.substring(0,80)} </p>

                   </div>
                    
                    </div>
                    <div >
                        <p class="precio">$${producto.precio}</p>
                        <a  href="javascript:addCarrito(${producto.id})" class="btn btn-dark" >Agregar al carrito</a>
                    </div>
                    
                
                
                `;



                seccionProductos.appendChild(prod);

            });

        }

    }

// Funcion que pushea los productos al carrito 
    addCart(producto){

        const existe = carrito.some(prod => prod.id === producto.id);

        if(existe){

            const articulos = carrito.map(prod => {
                if(prod.id === producto.id)
                {
                prod.cantidad ++;
                alert("Producto sumado al carrito")
                return prod;
                }else{
                    return producto;
                }
            })

        }else{

            carrito.push(producto);
            alert("Producto agregado con éxito");

        }

        
        
        this.actualizarCarrito();

    }


    actualizarCarrito(){

         this.actualizarContador();

         this.mostrarCarrito();

         this.guardarCarrito();


    }

    actualizarContador(){

        let totalProductos = this.contarProductos();
        let contadorCarrito = document.getElementById("contadorProducto");
        contadorCarrito.innerHTML = totalProductos;
    }

    contarProductos(){

        let contadorProductos = 0;

        carrito.forEach((producto) => {

            contadorProductos += parseInt(producto.cantidad);
        })

        return contadorProductos;

    }

    mostrarTituloProdcuctos(msj){

        const tituloProductos = document.getElementById("tituloProductos");
        tituloProductos.innerHTML = msj ;

    }



    mostrarCarrito(){

        let detalleCarrito = document.getElementById("idCarrito");
        detalleCarrito.innerHTML = "" ;

        let total = 0;

        carrito.forEach((producto)=>{

            const divProdCarrito = document.createElement("div");
            divProdCarrito.classList.add("row");

            total += parseInt(producto.precio * producto.cantidad);

            divProdCarrito.innerHTML = `
                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                 <img src="${producto.img}" width="80"/>
                            </div>

                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                ${producto.nombre}
                            </div>

                            <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                                $ ${producto.precio}
                            </div>

                            <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                                ${producto.cantidad}
                            </div>

                            <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                                <a href="javascript:eliminar(${producto.id})">
                                    <i class="fa-solid fa-square-minus fa-2x"></i>
                                </a>
                            </div>
            
            
            `;

            detalleCarrito.appendChild(divProdCarrito);

        });
        

        let row = document.createElement("div");
        row.classList.add("row");

        row.innerHTML= `
                        <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                            Total a pagar:
                        </div>
                        <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                            <b> $ ${total}</b>
                        </div>
                        <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom"><a href="javascript:vaciarCarrito()" class="btn btn-dark">Vaciar Carrito</a></div>`;
        
        detalleCarrito.appendChild(row);

    }


    guardarCarrito(){

        localStorage.setItem("carrito",JSON.stringify(carrito));
    
    }

    
    eliminarProdCarrito(id){

        let resp = confirm("¿Está seguro de retirar el producto del carrito?");

        if(resp){

            carrito = carrito.filter(producto => producto.id != id);

            this.actualizarCarrito();

            alert("Producto retirado del carrito");

            if(carrito == 0){
                let detalleCarrito = document.getElementById("idCarrito");
            detalleCarrito.innerHTML = '<p class="carritoVacio">¡Nada por aquí!</p>' ;
            }
        }

    }

    vaciarCar(){

        if(carrito != 0){
            let resp = confirm("¿Está seguro de retirar todos los productos del carrito?");

            if(resp){

            carrito = [];
            this.actualizarCarrito();
            let detalleCarrito = document.getElementById("idCarrito");
            detalleCarrito.innerHTML = '<p class="carritoVacio">¡Nada por aquí!</p>' ;

            }
        }else {

            alert("El carrito actualmente está vacío");
            let detalleCarrito = document.getElementById("idCarrito");
            detalleCarrito.innerHTML = '<p class="carritoVacio">¡Nada por aquí!</p>' ;

        }
    }


    BotonFiltrar(){
        

         let marca = productos.map((prod) => prod.marca);

        
         let boton = document.createElement("a") ;
         boton.innerHTML = `<button class="btn btn-dark">AMD</button>`;

         let boton2 = document.createElement("a") ;
         boton2.innerHTML = `<button class="btn btn-dark">Intel</button>`;

         let boton3 = document.createElement("a") ;
         boton3.innerHTML = `<button class="btn btn-dark">Mostrar Todos</button>`;


         let span1 = document.querySelector(".filtrarMarca1");
         span1.addEventListener("click",()=>filtrarMarca(marca[5]));
         span1.appendChild(boton);

         let span2 = document.querySelector(".filtrarMarca2");
         span2.addEventListener("click",()=>filtrarMarca(marca[0]));
         span2.appendChild(boton2);

         let span3 = document.querySelector(".mostrarTodos");
         span3.addEventListener("click",()=>this.cargarProductos(productos));
         span3.appendChild(boton3);

        
    }


    
}