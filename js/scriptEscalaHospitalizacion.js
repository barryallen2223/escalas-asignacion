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
    // Monitorizacion
    if (document.getElementById('signos').checked == true) {
        tiempo += 6;
    }
    if (document.getElementById('balance').checked == true) {
        tiempo += 20;
    }
    if (document.getElementById('drenes').checked == true) {
        tiempo += 8;
    }

    // Movilizacion
    if (document.getElementById('cambiosPost').checked == true) {
        tiempo += 30;
    }
    if (document.getElementById('movSillon').checked == true) {
        tiempo += 4;
    }
    if (document.getElementById('inmoviFisica').checked == true) {
        tiempo += 5;
    }
    if (document.getElementById('acompDucha').checked == true) {
        tiempo += 15;
    }

    // Cuidados generales
    if (document.getElementById('bathCama').checked == true) {
        tiempo += 40;
    }
    if (document.getElementById('higBucal').checked == true) {
        tiempo += 9;
    }
    if (document.getElementById('afeitado').checked == true) {
        tiempo += 5;
    }
    if (document.getElementById('hidratCorp').checked == true) {
        tiempo += 4;
    }
    if (document.getElementById('cambRopa').checked == true) {
        tiempo += 10;
    }
    if (document.getElementById('cambPanal').checked == true) {
        tiempo += 10;
    }
    if (document.getElementById('canalPerif').checked == true) {
        tiempo += 15;
    }

    // Nutricion
    if (document.getElementById('viaOral').checked == true) {
        tiempo += 50;
    }
    if (document.getElementById('dietSonda').checked == true) {
        tiempo += 20;
    }

    // Preparación para procedimientos y ayudas diagnósticas
    if (document.getElementById('trasPaciente').checked == true) {
        tiempo += 20;
    }
    if (document.getElementById('prepQuirur').checked == true) {
        tiempo += 20;
    }
    if (document.getElementById('prepAyudas').checked == true) {
        tiempo += 20;
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