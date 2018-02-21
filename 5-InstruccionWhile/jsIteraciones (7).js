function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var promedio;
	var numero;

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese los digitos"));
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt("desea continuar?");
	}

	promedio = acumulador / contador;
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN