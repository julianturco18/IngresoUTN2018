function Mostrar()
{
    var contDivisores = 0;
    var i;
    var numero;

    numero = parseInt(prompt("ingrese un numero "));

    for (i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contDivisores++;
            console.log(i);
        }
    }
    console.log("se encontraron " + contDivisores + "numeros divisores de " + numero);




}//FIN DE LA FUNCIÓN