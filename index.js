function getHorasTrabalhadas() {
    let horaEntrada = document.getElementById("horariosForm").entrada.value.split(":");
    let horaSaida = document.getElementById("horariosForm").saida.value.split(":");
    let horaAlmoco = document.getElementById("horariosForm").almoco.value.split(":");
    let horaRetorno = document.getElementById("horariosForm").retorno.value.split(":");

    let horaEntradaDec = (parseInt(horaEntrada[0]) + parseInt(horaEntrada[1]) / 60);
    let horaSaidaDec = (parseInt(horaSaida[0]) + parseInt(horaSaida[1]) / 60);
    let horaAlmocoDec = (parseInt(horaAlmoco[0]) + parseInt(horaAlmoco[1]) / 60);
    let horaRetornoDec = (parseInt(horaRetorno[0]) + parseInt(horaRetorno[1]) / 60);

    let horarioAlmocoDec = horaRetornoDec - horaAlmocoDec; 
    let horasTrabalhadasDec = horaSaidaDec - horaEntradaDec - horarioAlmocoDec;

    let horasExtrasDec = horasTrabalhadasDec - 8;

    let horas = Math.floor(horasTrabalhadasDec).toString();
    let minutos = Math.round(((horasTrabalhadasDec % 1)) * 60).toString();

    let horasExtras = Math.floor(horasExtrasDec).toString();
    let minutosExtras = Math.round(((horasExtrasDec % 1)) * 60).toString();

    document.getElementById("horasTrabalhadas").value = `${horas.padStart(2, "0")}:${minutos.padStart(2, "0")}`;
    document.getElementById("horasExtras").value = `${horasExtras.padStart(2, "0")}:${minutosExtras.padStart(2, "0")}`;
}