var nPaciente = 1;

function indBarthel() {
    // Acuerdese de llamar las variables con nombre.value
    var Monitorizacion = document.getElementById('Monitorizacion');
    var Procedimientos = document.getElementById('Procedimientos');
    var MovilizacionCambio = document.getElementById('MovilizacionCambio');
    var apoyoCuidado = document.getElementById('apoyoCuidado');

    var total = 0.0;

    switch (Monitorizacion.value) {
        case 'signos-Monitorizacion':
            total += 4.5;
            break;
        case 'presen2h-Monitorizacion':
            total += 12.1;
            break;
        case 'presen4h-Monitorizacion':
            total += 19.1;
            break;
    }

    if (document.getElementById('tomaMuestra').checked == true) {
        total += 4.3;
    }

    if (document.getElementById('admMedicacion').checked == true) {
        total += 5.6;
    }

    switch (Procedimientos.value) {
        case 'higi-Procedimientos':
            total += 4.1;
            break;
        case 'presen2h-Procedimientos':
            total += 16.5;
            break;
        case 'presen4h-Procedimientos':
            total += 20.0;
            break;
    }

    if (document.getElementById('cuidDrenaje').checked == true) {
        total += 1.8;
    }

    switch (MovilizacionCambio.value) {
        case 'uno-MovilizacionCambio':
            total += 5.5;
            break;
        case 'dos-MovilizacionCambio':
            total += 12.4;
            break;
        case 'tres-MovilizacionCambio':
            total += 17.0;
            break;
    }

    switch (apoyoCuidado.value) {
        case 'ap1h-apoyoCuidado':
            total += 4.0;
            break;
        case 'ap3h-apoyoCuidado':
            total += 32.0;
            break;
    }

    if (document.getElementById('tarAdmin').checked == true) {
        total += 4.2;
    }

    // Soporte y ventilatorio
    if (document.getElementById('ventMecanica').checked == true) {
        total += 1.4;
    }
    if (document.getElementById('cuidViaAerea').checked == true) {
        total += 1.8;
    }
    if (document.getElementById('tratPulmonar').checked == true) {
        total += 4.4;
    }

    // Soporte cardiovascular
    if (document.getElementById('medVasoactiva').checked == true) {
        total += 1.2;
    }
    if (document.getElementById('repoIntra').checked == true) {
        total += 2.5;
    }
    if (document.getElementById('monitAuriIzq').checked == true) {
        total += 1.7;
    }
    if (document.getElementById('resutacion').checked == true) {
        total += 7.1;
    }

    //Soporte renal
    if (document.getElementById('tecHemo').checked == true) {
        total += 7.7;
    }
    if (document.getElementById('mediOrina').checked == true) {
        total += 7.0;
    }

    //Soporte neurológico
    if (document.getElementById('mediPresion').checked == true) {
        total += 1.6;
    }

    //Sopoprte metabólico
    if (document.getElementById('tratCompl').checked == true) {
        total += 1.3;
    }
    if (document.getElementById('nutriParental').checked == true) {
        total += 2.8;
    }
    if (document.getElementById('alimEnteral').checked == true) {
        total += 1.3;
    }

    //Intervenciones específicas
    if (document.getElementById('intervCuidadosInt').checked == true) {
        total += 2.8;
    }
    if (document.getElementById('intervEspecifIntensivos').checked == true) {
        total += 1.9;
    }

    document.getElementById('Resultados').value += "Paciente " + nPaciente + " | Porcentaje: " + total + "%" + "\n";
    nPaciente++;
}
