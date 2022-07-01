//Kelly Johana Ascanio Rodríguez
//2470980
//Fecha 31/06/2022
//Crea clase Almacen
class Almacen {
  #nombreVendedor
  #nombreProducto
  #precioProducto
  #cantidadProducto
  
  constructor() {
    this.#nombreVendedor = "";
    this.#nombreProducto = "";
    this.#precioProducto = 0 ;
    this.#cantidadProducto = 0;
  }

  //capturamos el nombre del vendedor
 capturaDato(mensaje){
   let valor = prompt(mensaje);
   return valor;
 }

  //se hace un get para vendedor
 get getNombreVendedor(){
    return this.#nombreVendedor;
  }

  //se hace un set para vendedor
  set setNombreVendedor(value){
    this.#nombreVendedor = value;
  }

  //se hace un get para producto
  get getNombreProducto(){
    return this.#nombreProducto;
  }

  //se hace un set para producto
  set setNombreProducto(value){
    this.#nombreProducto = value;
  }

  //se hace un get para precio del producto
   get getPrecioProducto(){
    return this.#precioProducto;
  }

  //Se hace un set para la cantidad del producto
  set setPrecioProducto(value){
    this.#precioProducto = value;
  }

  //Se hace un get para la cantidad del producto
   get getCantidadProducto(){
    return this.#cantidadProducto;
  }

  //Se hace un set para la cantidad del producto
  set setCantidadProducto(value){
    this.#cantidadProducto = value;
  }

}

// ------------CLASE PRODUCTOS A VENDER------------

class productosVender {
 #productos = []; //definimos arreglo
 constructor(){
   this.#productos = [];
 }

get getproductos(){
 return this.#productos
}

nuevoProducto(){
let producto = new Almacen(); //se instancia la clase almacen en la variable producto
producto.setNombreVendedor = nombre;
producto.setNombreProducto = validacionNombre('Digite el nombre del producto a vender');
producto.setCantidadProducto = validacionNumero('Digite numero de unidades ');
producto.setPrecioProducto =  validacionNumero('Digite precio de la unidad ');

this.#productos.push(producto);
return this.productos;
};

}
let nombre=""
let swicht = true;
//Capura nombre del vendedor
function capturaNombreVendedor(){
 do{
let nombre = prompt('Nombre del vendedor');

 if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
     return nombre;
   } while (swicht);
}  

//-------------------Cliente----------------------

//se hace la clase cliente
class Cliente{
 //se hacen los atributos
 #nombreCliente
 #nomProCliente
 #cantidadCliente
 #precioCliente
  

 //Se crea el constructor para inicializar los atributos
 constructor(){
   this.#nombreCliente = "";
   this.#nomProCliente = "";
   this.#cantidadCliente = 0;
   this.#precioCliente=0
 }

 //se hace un get para el nombre del cliente
 get getNombreCliente(){
   return this.#nombreCliente;
 }

 //se hace un set para el nombre del cliente
 set setNombreCliente(value){
   this.#nombreCliente = value;
 }

 //se hace un get para el nombre del producto del cliente
 get getNomProCliente(){
   return this.#nomProCliente;
 }

   //se hace un set para el nombre del producto del cliente
 set setNomProCliente(value){
   this.#nomProCliente = value;
 }

   //se hace un get para la cantidad del producto
 get getCantidadCliente(){
   return this.#cantidadCliente;
 }

 //se hace un set para la cantidad del producto
 set setCantidadCliente(value){
   this.#cantidadCliente = value;
 }
  get getPrecioCliente(){
    return this.#precioCliente;
  }
  set setPrecioCliente(value){
    this.#precioCliente=value
  }
}
//-------Clase cliente produc contiene array-----------
class Clienteproduc {
 //se define un array
 #productoCliente = [];

 //se inicializa el array
 constructor(){
   this.#productoCliente = [];
 }

 //se hace el get al bodega cliente la cual sirve pegar todo en la palabra encargo
get bodegaCliente(){
 return this.#productoCliente
}

 //
nproducto(){
let encargo = new Cliente();
encargo.setNombreCliente = nombreCli;
encargo.setNomProCliente = capturaProductoCliente()
  let array=capturaCantidadCliente(encargo.getNomProCliente)
encargo.setPrecioCliente=array[0]
encargo.setCantidadCliente =array[1]


this.#productoCliente.push(encargo);
return encargo;
};

}

//FUNCION QUE VALIDA STRING
function validacionNombre(texto) {
do {
  let nombre = prompt(texto);

  if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
    return nombre;
} while (true);
}
//FUNCION QUE VALIDA INT
function validacionNumero(texto) {
do {
  let nombre = prompt(texto);

  if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
    return nombre;
} while (true);
}
//se instancia la clase almacen en la variable cantidadValidar
cantidadValidar= new Almacen ();
//FUNCION VALIDA LA CANTIDAD
function ValidarCanti(texto){
 do {
  let nombre = prompt(texto);

  if (nombre <= cantidadValidar.setCantidadProducto )
    return nombre;
} while (true);
}
//FUNCION Capura nombre del cleinte
function capturaNombreCliente(){
 do{
   let nombreCli = validacionNombre('Nombre del Cliente');
   return nombreCli;
 } while (sw);
}  
//FUNCION CAPTURA NOMBRE DEL PRODUCTO
function capturaProductoCliente(){
do{
  let producClint = validacionNombre("Digite el nombre del producto que desea comprar =>")
for (let revisarProd of stack.getproductos){

  if(producClint === revisarProd. getNombreProducto)
  return producClint ;    
  }
    console.log("no contamos con ese producto") 
}while(true)
}
//Funcion captura la cantidad de productos a comprar
function capturaCantidadCliente(nombreP){
do{
  let cantidadClint = validacionNumero("Digite la cantidad del producto que desea comprar =>")
for (let revisarProd of stack.getproductos){

  if(cantidadClint <= revisarProd. getCantidadProducto && nombreP===revisarProd.getNombreProducto){
 
  revisarProd.setCantidadProducto=  revisarProd.getCantidadProducto-cantidadClint
     let cCliente =    cantidadClint*revisarProd.getPrecioProducto
 console.log("Nos queda en bodega", revisarProd.getCantidadProducto)
//array para retornar dos varibles al mismo tiempo
    let array= [cCliente,cantidadClint]
  return array ; 
}  
}
    console.log("supera el rango de productos")
}while(true)
}
//////////////LINEAS DE CÓDIGO/////////////
// se guarda la funcion en la variable nombre
nombre = capturaNombreVendedor();
//captura nombre del producto
//variable para la comparacion del nombr del producto
//Variables adicionales para nombre del vendedor
let resultado = true;
//Se crean bucles do while para registrar los productos
let stack = new productosVender;
do{
//bucle do while para el nombre del vendedor
//La nueva variable stack captura los atributops de la clase Productos
//Se crea un bucle para saber si desea agregar o no un nuevo producto
do{
  stack.nuevoProducto(nombre);
  respuesta = confirm('¿Desea agregar un nuevo producto?');
  }while(respuesta);


  console.log('Nombre del Vendedor ' + nombre)




let i=0;
let vender=0;
 //se hace la funcion flecha para que me recorra el arreglo y lo muestre todo al final
     console.log(   "Nombre"+ "   ||    " +"Cantidad"+"||"+"Precio")
  stack.getproductos.forEach(producto => {
i++;

console.log(producto.getNombreProducto + ""+" || " + producto.getCantidadProducto +  "     "+"|| " + producto.getPrecioProducto)
});
}while(respuesta)


let nombreCli="";
let sw= false;


nombreCli = capturaNombreCliente();



function Result(){

}
let pista = new Clienteproduc;
do{

//bucle do while para el nombre del vendedor


//La nueva variable stack captura los atributops de la clase Productos


//Se crea un bucle para saber si desea agregar o no un nuevo producto
do{
pista.nproducto(nombreCli);
responder = confirm('¿Desea agregar un nuevo producto?');
}while(responder);
console.log("")
console.log('Nombre del cliente ' + pista.bodegaCliente[0].getNombreCliente);

let i=0;
let vender=0;

 console.log(   "Nombre"+ "||" +"Cantidad")
 //se hace la funcion flecha para que me recorra el arreglo y me lo muestre todo al final
pista.bodegaCliente.forEach(encargo => {
i++;
console.log(i+ ". " + encargo.getNomProCliente + "|| " + encargo.getCantidadCliente)

});

}while(responder)
    console.log("Su total es de",pista.bodegaCliente[0].getPrecioCliente)
console.log("gracias por su compra",pista.bodegaCliente[0].getNombreCliente)

//variable para la comparacion del nombr del producto
