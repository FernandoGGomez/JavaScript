
// SOLICITAR AL USUARIO QUE SE REGISTRE 
let usuario = prompt("Registre un nombre de usuario");
let contraseña = prompt("Registre una contraseña");


// SOLICITAR AL USUARIO QUE INGRESE SUS DATOS (Usuario y Contraseña)
function solicitarDatos(){

    let usuario = prompt("Ingrese nombre de usuario: ");
    let contraseña = prompt("Ingrese contraseña");

    if (validarDatos(usuario,contraseña)){

        // iniciarCompras();
        Menu();

    }

}

// VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
function validarDatos(NombreUsuario,ContraUsuario){

    if (NombreUsuario === usuario && ContraUsuario === contraseña){

        return true;

    }else if(NombreUsuario===usuario && ContraUsuario !== contraseña){

        alert("Contraseña incorrecta");
        return false;
    }else if(NombreUsuario !== usuario && ContraUsuario === contraseña) {
        alert("Nombre de usuario incorrecto");
        return false;
    }else{

        alert("Nombre de usuario y contraseña incorrectos");

    }
}
let opcion = 0;


// MENU
function Menu(){
    opcion = prompt(`
    1 Ver Productos
    2 Ver Carrito
    `);

    switch(opcion){
        case "1" : iniciarCompras();
            break;

        case "2" : Carrito();
            break;

        default : alert("Ingrese una opción válida");
    }
}
let carro = [];
 function Carrito(){
    
    if(carrito.length){

        for(i=0 ; i<carrito.length ; i++){
            carro.push(carrito[i].nombre)
            carro.push(carrito[i].precio)
        }

        let respuesta = confirm(`¿Desea concretar la compra de :  ${carro}   \n por un valor total de : $ ${precioTotal}  ? \n Tecla ESC si desea quitar algún elemento del carrito`);
        if (respuesta){

            alert("Gracias por elegirnos!");
            carrito =[];
            precioTotal = 0;
            producto ="";
            Menu();

         }else{
            respuesta = confirm("¿Desea quitar algún producto del carrito?")
            if(respuesta){
                let eliminar = prompt(`
                Elija el producto a eliminar
                 ${carro}
                 
                `);
                let algo = parseInt(eliminar)
                switch(algo){

                    case algo : carro.splice(algo,1);
                                precioTotal -= carro.precio; 
                         Carrito();
                    break;
                    default : Carrito();
                }
            }
         }

    }else{
        alert("No hay nada por aquí")
        Menu();
     }
    

 }

// Variable donde se almacenará la el precio total de la compra

let precioTotal= 0;

// Variable donde se almacenará el precio de cada producto



// MENU de Productos
function menuProductos() {
    return prompt(`
    Ingrese el Código del Producto que desee: 
    1 Procesador $30000
    2 Memoria RAM $20000
    3 Placa Madre $15000
    4 Placa de video $100000
    5 Gabinete $7000 
    6 Fan cooler $5000
    ESC Volver al Menu principal
    `);
  }

// Funcion que inicia la compra
let carrito = [];
function iniciarCompras(){

    
    let finalizarCompras = false;
    

    while(!finalizarCompras){

        let codigo = menuProductos(); 
        let producto = codigoProducto(codigo);
        if (producto){
            // for( i=0 ;i < precioProducto.length ; i++){
                
            //     precioDelProducto= precioProducto[i]
            // }
            console.log("Producto agregado con éxito: " + producto.nombre + " $" + producto.precio + "\nValor total de la compra: $" + precioTotal);
            carrito.push(producto);
            

        }else{

            if ( codigo === null){

                finalizarCompras = true;

            }else{

                alert("Ingresar un código de producto válido")
            }
        }
    }

    if (carrito != ""){

        // let respuesta = confirm("¿Desea concretar la compra de : " + carrito + "\n por un valor total de : $" + precioTotal + "?");
        // if (respuesta){

        //     alert("Gracias por elegirnos!");
        //     Menu();

        //  }
        Menu();
         
    }

}


// PRODUCTOS
let producto;
function codigoProducto(codigo){
    
   

    switch (codigo){

        case "1" : producto = procesador;
                   
                   precioTotal += procesador.precio;
        break;

        case "2" : producto = memoria_ram;
                   
                   precioTotal += memoria_ram.precio;
        break;
        
        case "3" : producto = placa_madre;
                   
                   precioTotal += placa_madre.precio;
        break;

        case "4" : producto = placa_de_video;
                  
                   precioTotal += placa_de_video.precio;
        break;

        case "5" : producto = gabinete;
                   
                   precioTotal += gabinete.precio;
        break;
        
        case "6" : producto = fan_cooler;
                   
                   precioTotal += fan_cooler.precio;
        break;

        default : producto = false;
    }

    return producto;
}


document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();
});
