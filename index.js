
let resultado;

let resultado2;


do {

let nombreUsuario = prompt("Hola, como es tu nombre?");

alert ("Bien venido" + " " +nombreUsuario);

let a = parseFloat(prompt ("Introduce el primer numero que quieras ultilizar"));

let b = parseFloat(prompt ("introduce el segundo numero que quieras utilizar"));



if (!isNaN(a) && !isNaN(b)) {

let operacion = prompt ("Introduce el tipo de operacion que quieras ( + / - / / / *)"); 

if(operacion === "+" || operacion === "-" || operacion === "/" || operacion === "*"){
    
    if (operacion === "+" ){
        resultado = a + b
    }else if (operacion === "-" ){
        resultado = a - b
    }else if (operacion === "*" ){
        resultado = a * b
    }else if (operacion === "/" ){
        if (a !== 0 && b !== 0){
            resultado = a / b;
        }else{
            alert("No se puedo dividir por 0")
        }
    }


    alert("El resultado es:" + " " + resultado)

    let respuesta = prompt ("Quieres aplicarle algun porcentaje a este resultado? (si / no)")

    if(respuesta === "si"){

        let porcentaje = parseFloat(prompt("Que porcentaje quisieras aplicarle?"))

        resultado2 = resultado * porcentaje / 100

        alert("El nuevo resultado es:" + " " + resultado2)

    }else{

        alert("Gracias!")

    }



}else{
    alert("Ingresar uno de los simbolos especificados")
} 

}

}while ( isNaN(resultado2) ) 


alert( "Gracias!" )



