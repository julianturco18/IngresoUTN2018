function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9 || isNaN (numero) || numero == "")
	{
		numero = prompt("numero incorrecto, ingrese nuevamente");
	}
		document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN