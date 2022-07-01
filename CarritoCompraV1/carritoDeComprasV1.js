//Kelly Johana Ascanio Rodríguez
//2470980
//Fecha 31/06/2022
do{
  let= productos=""
  nombreCliente=validacionNombre("Dijite su nombre")
  let productosTienda={ // se crea un objeto para mostrarle al cliente las opciones disponibles
    P:"pantalon",
    C:"camisas",
    M:"medias",
  };
          productos= productos+"P: pantalon"+"\n" +"C: camisas"+"\n"+ "M: medias"
       alert(productos) //se muestra el objeto
       console.log(productos)
     do{
       
      letraProducto=prompt("digite la letra del producto que quieres comprar")
       letraMayus=letraProducto. toUpperCase () //valida letras en mayúscula
      
     esta = false
     for(let key in productosTienda){
       if (key ==  letraMayus){
         esta = true}
     }
     }while (esta==false)  
     console.log(esta)//muestra si es true o false
     cantidadProducto=prompt("Digite la cantidad del producto que quieres comprar")
     console.log(cantidadProducto)
while (cantidadProducto == null || /\D/.test(cantidadProducto) || cantidadProducto== "") {
  cantidadProducto = prompt("Digite la cantidad del producto que quieres comprar");
};

  //switch valida que los codigos coincidan además contiene la operacion de la compra
switch(letraMayus){
     case 'C':
     alert("El producto seleccionado es camisa con un costo por unidad de 20000")
     camisas=20000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + camisas + " pesos" );
     break;
     case 'P':
     alert("El producto seleccionado es pantalon con un costo por unidad de 50000")
     pantalones=50000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + pantalones + " pesos" );
     break;
     case 'M':
     alert("El producto seleccionado es medias con un costo por unidad de 5000")
     medias=5000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + medias + " pesos" );
     break;
     default:
     alert("El valor digitado es incorrecto")
     };   
     rep = confirm("¿Desea volver a la tienda? ");      //variable booleana
     }while(rep===true)
     alert("Gracias por su compra, feliz día.")
//funcion que valida que sea string
function validacionNombre(texto) {

do {
  let nombre = prompt(texto);

  if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
    return nombre;
} while (true);
}