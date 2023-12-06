// Funciones:
function Calculadora(params) {
    let nombre = (prompt ("Ingresa el nombre del articulo"));
    alert ( "Ganancias obtenidas de" + " " + nombre );
}

function GanaciaUnidad ( precioCosto, precioVenta) {
    alert( "la ganancia del articulo es de:");
    alert( precioVenta - precioCosto);
}

function GananciaTotal (precioCosto, precioVenta, ventas) {
    alert( "Has obtenido por el total de ventas una ganancia total de: ");
    alert ( (precioVenta - precioCosto) * ventas);
}

// ciclo while

let ingresaOtro = true

while (ingresaOtro){

Calculadora ();
    
    let precioCosto = parseFloat (prompt( "ingresa el costo del articulo por unidad"));
    let precioVenta = parseFloat (prompt ( "ingresa el precio de venta del articulo por unidad"));

GanaciaUnidad (precioCosto, precioVenta);

let ventas = parseFloat (prompt ( "ingresa la cantidad de articulos vendidos"));

GananciaTotal ( precioCosto, precioVenta, ventas)

    let continuar = prompt("Deseas ingresar otro articulo? (si/no)").toLowerCase();

    if (continuar === "no"){ 

        ingresaOtro = false
        
        alert ("Hasta pronto");
        
    }

}
