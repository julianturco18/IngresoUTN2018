function Mostrar() {
    //tomo el mes 
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("31 dias")
            break;
        case "Febrero":
            alert("28 dias")
            break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("30 dias")
            break;
    }





}//FIN DE LA FUNCIÓN