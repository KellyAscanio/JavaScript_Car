//Kelly Johana Ascanio Rodríguez
//2470980
//Fecha 31/06/2022
//se importa el archivo json y se guarda en la variable datosArchivo
import datosArchivo from './datos.json' assert { type: 'json' };
// Clase que gestiona cada uno de los productos que se tienen para la venta
class ProductoTienda {

     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;

     constructor(){

          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;

     }
//métodos get y set
     get getCodigoProducto() {
          return this.#codigoProducto;
     }

     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }

     get getNombreProducto() {
          return this.#nombreProducto;
     }

     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }

     get getInventarioProducto() {
          return this.#inventarioProducto;
     }

     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }

     get getPrecioProducto() {
          return this.#precioProducto;
     }

     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }

}
//Clase que gestiona los productos que se tienen para la venta en la tienda
class GestionarProductosTienda {

     #cargaProductos;
//#cargaproductos donde se captura el arreglo
     constructor(){

          this.#cargaProductos = [];

     }
//método que retorna el arreglo
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }
//método donde se pregunta info al vendedor
     cargaManualProducto(){

          let dato = "";
          //let respuesta = confirm('¿Desea digitar un nuevo producto?');

          while (confirm('¿Desea digitar un nuevo producto?')){

               let sw = true;
               //se instancia la clase ProductoTienda en la variable producto
               let producto = new ProductoTienda();

               do{
                    dato = this.datosProducto("Digite Codigo del Producto ==> ", "number");
                    //sw = this.verificarCodigoProducto(dato);
               } while (this.verificarCodigoProducto(dato));
               //permite la entrada de codigo en mayúscula
               producto.setCodigoProducto = dato.toUpperCase();
               //bucle para ingrsar el nombre del producto
               do{
                    dato = this.datosProducto("Digite Nombre del Producto ==>" , "letras");
               } while (this.verificarNombreProducto(dato.toUpperCase()));

               //método set para validar mayúscula

               producto.setNombreProducto = dato.toUpperCase();

               //método set, especifica el objeto number la conversion de un string u otro valor a numerico
               producto.setInventarioProducto = Number(this.datosProducto("Digite Inventario del Producto ==>","number"));
               producto.setPrecioProducto = Number(this.datosProducto("Digite Precio del Producto ==>","number"));
     
               //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
               this.#cargaProductos.push(producto);
     
               //respuesta = confirm('¿Desea grabar un nuevo producto?');

          }
     }
 
     //método cargaArchivoProducos
     cargaArchivoProductos(){
          
          let i=0;

          if (datosArchivo.length > 0){
          
               //El bucle foreach es un bucle que permite recorrer estructuras que contienen varios elementos en este caso el array
               //en este caso se recorre el arreglo de dstos de archivo que se importo desde el inicio del código
               datosArchivo.forEach(objeto => {
               //se crea una función flecha con el argumento objeto
               //se instancia la clase ProductoTienda a la variable preoducto
                    i++;
                    let producto = new ProductoTienda();
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto; 
                    // llama los metodos set con la variable producto y modifica los 
                    //valores usando el atributo objeto a los artributos de la clase ProductoTienda
                    this.#cargaProductos.push(producto);
                    //con el método push le añade al array #cargaproductos los nuevos elementos y devuelve la nueva longitud del array
     
               });  

          };

          //muestra en la consola el total de los productos cargados por medio del operador i++
          console.log("Total de productos cargados ==> " + i);

     }

     //metodo almacenaProductos con una propiedad (datosClase)
     almacenaProductos(datosClase){
          //console.log(datosClase);
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          let datosJson = localStorage.getItem("productosTienda");
          //console.log(JSON.parse(datosJson));
     }

     //Método para validar datos-pendiente
     datosProducto(mensaje, tipo){
          let valor = "" ;
          if(tipo==="number")valor=validacionNumero(mensaje)
          if(tipo=== "letras")valor= validacionNombre(mensaje)
          return valor;
     }

     //metodo quqe verifica el codigo contiene un try por si llegan a existir errores
     verificarCodigoProducto(codigo){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length > 0){

               try {
                    //se utiliza el bucle foreach para que recorra el arreglo (#cargaProductos)
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };

          } else{
               sw = false;
          }
          return sw;
     }
     //se verifica que el nombre del producto solo exista una vez y tambien contiene un try catch
     verificarNombreProducto(nombre){

          let sw = false;
          let BreakException = {};

          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
               } catch (e) {
                    if ( e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }

     //método que muestra el listado de productos disponibles
     mostrarProductos(datosProductos){
          let i=0;
          console.log ("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");

          //for each recorre el arreglo e incluye los  nuevos productos a vender que son digitados
          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     | " + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }

}
//clase que gestiona cada uno de los productos que el cliente tiene en el carrito de compras
class CompraProductoTienda {
     //Atributos
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;

     //metodo constructor
     constructor() {

          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;

     }

     //metodo que calcula y retorna al total de la compra
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }

     //metodo que solicita mensaje y retorna
     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }

     //metodo para solicitar el codigo del producto que desea comprar contiene un Try- Catch por si surge un error
     datoCodigoProducto(datosProductos){

          let sw = true;
          let BreakException = {};
          let valor = "";
          do {
               valor = prompt("Digite Codigo Producto ==> ");
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor && objeto.getInventarioProducto> 0 ){
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              valor = objeto.getNombreProducto;
                              sw = false;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               if (sw){
                    console.log("Codigo no existe. ¡Verifique!");
               }
          } while (sw);

          return valor;
     }


     datoCantidadProducto (datosProductos){

          let sw = true;
          let valor = "";
          let BreakException = {};
          
          do {
               valor = validacionNumero("Digite Número de unidades ==>");

               if (valor <= this.getCantidadCompra && valor>0){
                    this.setCantidadCompra = valor;
                    try {
                         datosProductos.forEach((objeto, index) => {
                              if (objeto.getNombreProducto === this.getProductoCompra){
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   throw BreakException;
                              };
                         });
                    } catch (e) {
                         if (e !== BreakException) throw e;
                    };
     
                    sw = false;
               }else{
                    console.log ("Cantidad no aceptada. ¡Verifique!");
               };
          } while (sw);

          return valor;
     }

     //métodos getter y setter de los atributos del cliente
     get getClienteCompra() {
          return this.#clienteCompra;
     }

     set setClienteCompra(value) {
          this.#clienteCompra = value;
     }

     get getProductoCompra() {
          return this.#productoCompra;
     }

     set setProductoCompra(value) {
          this.#productoCompra = value;
     }

     get getCantidadCompra() {
          return this.#cantidadCompra;
     }

     set setCantidadCompra(value) {
          this.#cantidadCompra = value;
     }

     get getPrecioCompra() {
          return this.#precioCompra;
     }

     set setPrecioCompra(value) {
          this.#precioCompra = value;
     }

}
// clase contiene el arreglo de los atributos del cliente
class CarritoCompra{
      //atributos
     #productosCarrito;

     //metodo constructor
     constructor(){

          this.#productosCarrito = [];

     }

     //metodo que guarda la informacion acerca de los productos que digita el cliente
     nuevoProducto(nombre, datosProductos){

          let producto = new CompraProductoTienda();

          producto.setClienteCompra = nombre;
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);
          //producto.setPrecioCompra = producto.datoPrecioCompra();
          this.#productosCarrito.push(producto);
     }

     //Muestra la factura de productos comprados por el cliente
     mostrarCompra(carrito){

          let i=0;
          let compra = 0;

          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");

          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Valor Total de la Factura ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }

     //metodo muestra la clase y retorna al arreglo
     get carritoCompra(){
          return this.#productosCarrito;
     }

     //metodo que muestra la cantidad de productos
     get numeroProductos(){
          return this.#productosCarrito.length;
     }
}
//----------------------------------FUNCIONES------------------------------------------
//funcion que solicita el nombre del cliente y se valida
function setNombreCliente(){
     let nombre = prompt('Nombre del Cliente');
     nombre = nombre.toUpperCase();
     return nombre;
}
//Funcion que valida la entrada del string
function validacionNombre(texto) {

     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }
//Funcion que valida que la entrada sea de númerica
function validacionNumero(texto) {
   
     do {
       let nombre = prompt(texto);
   
       if (nombre !== "" && !(!/^[0-9]*$/g.test(nombre)))
         return nombre;
     } while (true);
   }

//----------------------------------LINEAS DE CÓDIGO------------------------------------
//variables que inicializa la funcion del nombre
let sw = true;
let respuesta = true;
let nombre = '';

//se instancia una la clase  GestionarProductosTienda() en la variable productosTienda
let productosTienda = new GestionarProductosTienda();

productosTienda.cargaArchivoProductos();

productosTienda.cargaManualProducto();

//console.log(productosTienda.getDatosProductosCargados());

productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());

let canasta = new CarritoCompra();

while (confirm('¿Existe un nuevo Cliente?')){

     do{
          nombre = setNombreCliente();
         if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };
     } while (sw);  


     do{
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());

     } while (confirm('¿Desea un nuevo producto?'));

     console.log(canasta.numeroProductos);
     console.log(canasta.carritoCompra);
     console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getClienteCompra);
     canasta.mostrarCompra(canasta.carritoCompra);
}