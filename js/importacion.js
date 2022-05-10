let aceptar_terminos = prompt("Antes de utilizar la calculadora, es necesario aceptar que el uso de esta es libre y netamente informativo. \n\nEl creador se reserva el derecho de modificar el acceso a la misma en cualquier momento.\n\nEscriba 'ACEPTAR' para continuar.")
while(aceptar_terminos!="ACEPTAR"){
 alert("Por favor, escriba 'ACEPTAR' para poder utilizar el aplicativo.")

 aceptar_terminos = prompt("Antes de utilizar la calculadora, es necesario aceptar que el uso de esta es libre y netamente informativo. \nEl creador se reserva el derecho de modificar el acceso a la misma en cualquier momento.\n\nEscriba 'ACEPTAR' para continuar.")
}

function calcular_impuestos (){
    let precio_producto = parseFloat(document.getElementById("cost_product").value);
    let resultado;
    let costo_envio = parseFloat(document.getElementById("cost_shipping").value);
    let tax_valorem;
    let tax_IGV;
    let tax_IPM;

    let valorem;
    let IGV;
    let IPM;
    let total;

    if (isNaN(precio_producto)!=true && precio_producto<=2000 && isNaN(costo_envio)!=true){
        if(precio_producto > 200){
            tax_valorem = precio_producto * 0.04;
            tax_IGV = ( precio_producto + costo_envio)  * 0.16;
            tax_IPM = ( precio_producto + costo_envio) * 0.02;
    
            resultado = precio_producto + costo_envio + tax_valorem + tax_IGV + tax_IPM;
    
        } else{
            tax_valorem = 0;
            tax_IGV = 0;
            tax_IPM = 0;
    
            resultado = precio_producto + costo_envio + tax_valorem + tax_IGV + tax_IPM;
        }
        valorem = document.getElementById("tax_adValorem");
        valorem.value = tax_valorem.toFixed(2);
    
        IGV = document.getElementById("tax_IGV");
        IGV.value = tax_IGV.toFixed(2);
    
        IPM = document.getElementById("tax_IPM");
        IPM.value = tax_IPM.toFixed(2);
    
        total = document.getElementById("total_cost");
        total.value = resultado.toFixed(2);
    
    } else if(precio_producto>2000){
        alert("El costo del producto no puede ser mayor a US$ 2000 para esta versión.\n\n Por favor, revise los datos ingresados. ")
    }
    else{
        alert("Por favor, complete los datos.")
    }

}