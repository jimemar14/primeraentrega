

let precioOriginal = 0;
let porcentajeAumento= 0;
let porcentajeDescuento = 0;
let operacion = 0;
let comenzar = confirm("Bienvenido al modificador de precios por porcentaje fijo. Voy a pedirle algunos datos para realizar la gestión. ¿Quiere empezar?");


function iniciar(){
    operacion = Number(prompt("¿Qué operación desea realizar? Responda con el número correspondiente: 1- Aumentar precio 2- Disminuir precio"));
    
    let operacionR = Number(operacion);
if (operacionR === 1){
    precioOriginal = prompt("¿Cuál es el precio actual del producto?");
    precioOriginalN = Number(precioOriginal);

    let porcentajeAumento = prompt("¿Qué porcentaje desea aumentar?");
    const porcentajeAumentoN = Number(porcentajeAumento);

    let primeraCuenta = precioOriginalN * porcentajeAumentoN / 100;

    let resultado = precioOriginalN + primeraCuenta;
    let resultadoFinal = Number(resultado)

    const stringTemplate = `El nuevo valor del producto es ${resultadoFinal}`;
    alert(stringTemplate);
    comenzar = confirm("¿Quiere realizar otra operación?")

}else if (operacionR === 2){
    precioOriginal = prompt("¿Cuál es el precio actual del producto?");
    precioOriginalN = Number(precioOriginal);

    porcentajeDescuento = prompt("¿Qué porcentaje desea descontar?");
    const porcentajeDescuentoN = Number(porcentajeDescuento);

    let primeraCuenta = precioOriginalN * porcentajeDescuentoN / 100;

    let resultado = precioOriginalN - primeraCuenta;
    let resultadoFinal = Number(resultado)

    const stringTemplate = `El nuevo valor del producto es ${resultadoFinal}.`;
    alert(stringTemplate);
    comenzar = confirm("¿Quiere realizar otra operación?")
}
else{ comenzar = confirm("Comando inválido. ¿Quiere probar nuevamente?");
}
}


while(comenzar){
    iniciar();
}

