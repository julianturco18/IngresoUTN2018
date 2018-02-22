function Mostrar() {

	var sumaPos = 0;
	var sumaNeg = 0;
	var contPos = 0;
	var contNeg = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta;
	var numero;

	do {
		numero = parseInt(prompt("Ingrese digitos"));
		if (numero < 0) {
			contNeg++;
		}
		else if (numero > 0) {
			contPos++;
		}
		else {
			contCeros++;
		}
		if (numero % 2 == 0) {
			contPares++;
		}
		if (numero >= 0) {
			sumaPos = sumaPos + numero;
			contPos++;
		}
		else {
			sumaNeg = sumaNeg + numero;
			contNeg++;
		}
		respuesta = prompt("desea continuar?: ");
	} while (respuesta == 's');
	promNeg = sumaNeg / contNeg;
	promPos = sumaPos / contPos;
	diferencia = sumaPos - sumaNeg;

	document.write("1 - suma de los negativos" + sumaNeg + "<br/>");
	document.write("2 - suma de los positivos" + sumaPos + "<br/>");
	document.write("3 - cantidad de positivos" + contPos + "<br/>");
	document.write("4 - cantidad de negativos" + contNeg + "<br/>");
	document.write("5 - cantidad de ceros" + contCeros + "<br/>");
	document.write("6 - cantidad de numeros pares" + contPares + "<br/>");
	document.write("7 - promedio de positivos" + promPos + "<br/>");
	document.write("8 - promedio de negativos" + promNeg + "<br/>");
	document.write("9 - diferencia entre negativos y positivos" + diferencia + "<br/>");



}//FIN DE LA FUNCIÓN