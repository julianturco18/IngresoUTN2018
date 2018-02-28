/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var alambreNecesario;
    var total;

    largo = parseInt (document.getElementById("Largo").value);
    ancho = parseInt (document.getElementById("Ancho").value);
    radio = parseInt (document.getElementById("Radio").value);

    total = (largo + ancho) * 2;
    alambreNecesario = total * 3;
    alert("Debes comprar " + alambreNecesario  + " metros de alambre"); 
}
function Circulo () 
{
    var radio;
    var total;
    var alambreNecesario;

	radio = parseInt (document.getElementById("Radio").value);
    total = 2 * radio * Math.PI;
    alambreNecesario = total * 3;
     alert("Debes comprar " + alambreNecesario  + " metros de alambre"); 
}
function Materiales () 
{
	var largo;
    var ancho;
    var total;
    var bolsasNecesarias;

    largo = parseInt (document.getElementById("Largo").value);
    ancho = parseInt (document.getElementById("Ancho").value);

    bolsasNecesarias = largo * ancho;
    alert("se necesitan " + bolsasNecesarias + " bolsas");
}