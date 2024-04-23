function genera_rfc() {
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const ap = document.getElementById("ap").value.toUpperCase();
    const am = document.getElementById("am").value.toUpperCase();
    const anio = document.getElementById("anio").value;
    const mes = document.getElementById("mes").value;
    const dia = document.getElementById("dia").value;

    const rfc = ap.slice(0, 2) + am.charAt(0) + nombre.charAt(0) +
        anio.slice(-2) + mes.padStart(2, "0") + dia.padStart(2, "0");

    document.getElementById("resultado").value = rfc;
}