do {
  do{
  let pre_tabla= prompt ("¿Qué tabla de multiplicar desea?(por default el valor es 10)");
    tabla=Number(pre_tabla);

    if (isNaN(tabla)=== true){
      alert ("digite solo números")
    }
    if (tabla=== 0){
       tabla=10 ;
    }
  }while(Number.isNaN(tabla) === true);
let totalMultiplicacion=""
  for (let i= 1; i<11;i++){
      totalMultiplicacion=totalMultiplicacion+tabla + "*" + i+ "="+ tabla *i+"\n"
  }
alert( totalMultiplicacion)
  
  valid = confirm("¿desea imprimir otra tabla de multiplicar?")
}while (valid === true)
alert('Termino su consulta')

  
  
  