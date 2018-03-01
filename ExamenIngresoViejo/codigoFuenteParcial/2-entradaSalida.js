//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe;
    var importeMasIva;

    importe = parseInt (document.getElementById("importe").value);
    importe = prompt("el importe del producto es ");
    importeMasIva = importe * 1.21;
    alert("el importe final es " + importeMasIva);
}

