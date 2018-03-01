//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
		var numero1;
        var numero2;
        var resultado;

        numero1 = parseInt (prompt ("ingrese digitos ").value);
        numero2 = parseInt (prompt ("ingrese digitos ").value);

        if(numero1 == numero2)
        {
            resultado = numero1 * numero2;
            document.write(resultado);
        }
        else if(numero1 > numero2)
        {
            resultado = numero1 - numero2;
            document.write(resultado);
        }
        else
        {
            resultado = numero1 + numero2;
            document.write(resultado);
        }
}

