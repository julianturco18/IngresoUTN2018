/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero1;
    var numero2;
    var numero3;
    var suma;

    numero1 = parseInt (document.getElementById("PrecioUno").value);
	numero2 = parseInt (document.getElementById("PrecioDos").value);
    numero3 = parseInt (document.getElementById("PrecioTres").value);
    suma = numero1 + numero2 + numero3;
    alert("la suma es  " + suma);
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var prom;
    var total;
   

    precio1 = parseInt (document.getElementById("PrecioUno").value);
	precio2 = parseInt (document.getElementById("PrecioDos").value);
    precio3 = parseInt (document.getElementById("PrecioTres").value);
    acumulador = precio1 + precio2 + precio3;
    prom = total / 3;
    alert("el promedio es  " + prom);
}
function PrecioFinal () 
{
	var numero1;
    var numero2;
    var numero3;
    var total;
    var preciofinalMasIva;
    numero1 = parseInt (document.getElementById("PrecioUno").value);
	numero2 = parseInt (document.getElementById("PrecioDos").value);
    numero3 = parseInt (document.getElementById("PrecioTres").value);
    total = numero1 + numero2 + numero3;
    preciofinalMasIva = total * 1.21;
    alert("el precio final es $ " + preciofinalMasIva);
}