//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
   
    mes = prompt("ingrese mes del año: ");
    mes = document.getElementById("mes").value;
    switch(mes)
    {
        case "Enero":
        case "Febrero": alert("Veranito!!!")
        break;
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre": alert("extraño enero y febrero!!!")
        break;
    }
}

