function indBarthel() {
    // Acuerdese de llamar las variables con nombre.value
    var Comer = document.getElementById('Comer');
    var Bath = document.getElementById('Bath');
    var Vestirse = document.getElementById('Vestirse');
    var ArrPer = document.getElementById('ArrPer');
    var Deposi = document.getElementById('Deposi');
    var Miccion = document.getElementById('Miccion');
    var UsoInodoro = document.getElementById('UsoInodoro');
    var Traslado = document.getElementById('Traslado');
    var Deambular = document.getElementById('Deambular');
    var Escaleras = document.getElementById('Escaleras');

    var total = 0,
        tiempo = 0;
    var interpretacion = "";
    var sillaRuedas = false;

    switch (Comer.value) {
        case 'totInd-Comer':
            total += 0;
            break;
        case 'necesAsis-Comer':
            total += 5;
            break;
        case 'dep-Comer':
            total += 10;
            break;
    }

    switch (Bath.value) {
        case 'totInd-Bath':
            total += 5;
            break;
        case 'dep-Bath':
            total += 0;
            break;
    }

    switch (Vestirse.value) {
        case 'totInd-Vestirse':
            total += 10;
            break;
        case 'necesAsis-Vestirse':
            total += 5;
            break;
        case 'dep-Vestirse':
            total += 0;
            break;
    }

    switch (ArrPer.value) {
        case 'totInd-ArrPer':
            total += 5;
            break;
        case 'necesAsis-ArrPer':
            total += 0;
            break;
    }

    switch (Deposi.value) {
        case 'conti-Deposi':
            total += 10;
            break;
        case 'algProb-Deposi':
            total += 5;
            break;
        case 'incont-Deposi':
            total += 0;
            break;
    }

    switch (Miccion.value) {
        case 'conti-Miccion':
            total += 10;
            break;
        case 'necesAsis-Miccion':
            total += 5;
            break;
        case 'incont-Miccion':
            total += 0;
            break;
    }

    switch (UsoInodoro.value) {
        case 'totInd-UsoInodoro':
            total += 10;
            break;
        case 'necesAsis-UsoInodoro':
            total += 5;
            break;
        case 'dep-UsoInodoro':
            total += 0;
            break;
    }

    switch (Traslado.value) {
        case 'totInd-Traslado':
            total += 15;
            break;
        case 'min-Traslado':
            total += 10;
            break;
        case 'necesAsis-Traslado':
            total += 5;
            break;
        case 'dep-Traslado':
            total += 0;
            break;
    }

    switch (Deambular.value) {
        case 'totInd-Deambular':
            total += 15;
            sillaRuedas = false;
            break;
        case 'camina-Deambular':
            total += 10;
            sillaRuedas = false;
            break;
        case 'silla-Deambular':
            total += 5;
            sillaRuedas = true;
            break;
        case 'dep-Deambular':
            total += 0;
            sillaRuedas = false;
            break;
    }

    switch (Escaleras.value) {
        case 'totInd-Escaleras':
            total += 10;
            break;
        case 'necesAsis-Escaleras':
            total += 5;
            break;
        case 'dep-Escaleras':
            total += 0;
            break;
    }

    if (total < 20) {
        interpretacion = "Dependencia Total";
        tiempo += 60;
    }
    if (total >= 20 && total <= 35) {
        interpretacion = "Dependencia Grave";
        tiempo += 50;
    }
    if (total >= 40 && total <= 55) {
        interpretacion = "Dependencia Moderada";
        tiempo += 40;
    }
    if (total >= 60) {
        interpretacion = "Dependencia Leve";
        tiempo += 20;
    }
    if (sillaRuedas == true && total == 90) {
        interpretacion = "Independiente con silla de ruedas";
        total = 90;
        tiempo += 10;
    }
    if (total == 100) {
        interpretacion = "Independiente";
        tiempo += 10;
    }
    document.getElementById('Puntuacion').value = "Interpretacion: " + interpretacion + " | " + "Puntuacion: " + total;
    document.getElementById('tiempo').value = tiempo;
    //console.log("desde arriba: " + tiempo);
}

var nPaciente = 1;

function depBarthel() {
    var tiempo = document.getElementById('tiempo').value;
    var Movilizacion = document.getElementById('Movilizacion');
    var CuidadosGenerales = document.getElementById('CuidadosGenerales');
    var Nutricion = document.getElementById('Nutricion');
    var AyudasDiagnosticas = document.getElementById('AyudasDiagnosticas');
    var horas = 0,
        minutos = 0;

    if (document.getElementById('signos').checked == true) {
        tiempo += 6;
        console.log(tiempo);
    }

    if (document.getElementById('balance').checked == true) {
        tiempo += 20;
        console.log(tiempo);
    }

    if (document.getElementById('drenes').checked == true) {
        tiempo += 8;
        console.log(tiempo);
    }

    switch (Movilizacion.value) {
        case 'cambios-Movilizacion':
            tiempo += 30;
            break;
        case 'sillon-Movilizacion':
            tiempo += 4;
            break;
        case 'inmovi-Movilizacion':
            tiempo += 5;
            break;
        case 'acomp-Movilizacion':
            tiempo += 15;
            break;
    }

    switch (CuidadosGenerales.value) {
        case 'bath-CuidadosGenerales':
            tiempo += 40;
            break;
        case 'higiene-CuidadosGenerales':
            tiempo += 9;
            break;
        case 'afeitado-CuidadosGenerales':
            tiempo += 5;
            break;
        case 'hidratacion-CuidadosGenerales':
            tiempo += 4;
            break;
        case 'cambioRopa-CuidadosGenerales':
            tiempo += 10;
            break;
        case 'cambioPanal-CuidadosGenerales':
            tiempo += 10;
            break;
        case 'canal-CuidadosGenerales':
            tiempo += 15;
            break;
    }

    switch (Nutricion.value) {
        case 'cambios-Nutricion':
            tiempo += 50;
            break;
        case 'dieta-Nutricion':
            tiempo += 20;
            break;
    }

    switch (AyudasDiagnosticas.value) {
        case 'traslado-AyudasDiagnosticas':
            tiempo += 20;
            break;
        case 'quirurgica-AyudasDiagnosticas':
            tiempo += 20;
            break;
        case 'diagnosticas-AyudasDiagnosticas':
            tiempo += 20;
            break;
    }
    horas = tiempo / 60;
    minutos = tiempo % 60;

    if (tiempo < 60) {
        document.getElementById('Resultados').value += "Paciente " + nPaciente + " | Tiempo: " + tiempo + " minuto(s)" + "\n";
    } else if ((tiempo % 60) == 0) {
        document.getElementById('Resultados').value += "Paciente " + nPaciente + " | Tiempo: " + tiempo + " = " + (horas) + " hora(s)" + "\n";
    } else {
        document.getElementById('Resultados').value += "Paciente " + nPaciente + " | Tiempo: " + tiempo + " = " + Math.floor(horas) + " hora(s) " + minutos + " minuto(s)" + "\n";
    }
    //document.getElementById('Resultados').value += "Paciente " + nPaciente + " | Tiempo: " + tiempo + "\n";
    nPaciente++;
}