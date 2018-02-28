function Mostrar()
{
    var numero;
    var numeroPrimo;
    var i;

    numero = parseInt(prompt("ingrese un numero "));

    for (i = 2; i < numero; i++)
    {
        if(numero % i == 0)
        {
            alert ("el numero " + numero + "no es primo");
            break;
        }
    else
    {
        alert("El numero " + numero + "es primo"); 
        break;
    }
    }



}//FIN DE LA FUNCIÓN