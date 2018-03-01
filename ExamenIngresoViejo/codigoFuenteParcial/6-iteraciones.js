//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var ventaMayor;
    var ventaMenor;
    var flag = 0;

    for(var i=1; i<=7;i++)
{
    venta = parseFloat(prompt("ingrese importe venta: "));

    while(venta <= 0)
    {
        venta = parseFloat(prompt("Error. El importe de venta debe ser mayor a 0. Reingrese"))
    }
}     
}

