//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;
    var acumNotas = 0;
    var promedio;
    var notaBaja;
    var varonesMas6 = 0;
    var flag = 0;

    for (i = 0; i < 6; i++) {
        nota = parseInt(prompt("Ingrese nota: "));
        while (nota < 0 || nota > 10) {
            nota = parseInt(prompt("Error. La nota debe estar entre 0 y 10. Reingrese: "));
        }
        sexo = prompt("Ingrese sexo: ");

        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Error. El sexo debe ser f o m. Reingrese sexo: ");
        }
        acumNotas += nota;
        if (nota < notaBaja || flag == 0) {
            notaBaja = nota;
            flag = 1;
        }
        if (sexo == 'm' && nota >= 6) {
            varonesMas6++;
        }
    }
    promedio = acumNotas / 6;

    alert("Promedio de notas: " + promedio + "\nNota mas baja: " + notaBaja + "\nVarones con nota >=6: " + varonesMas6);
}

