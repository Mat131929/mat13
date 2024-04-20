function evalua() {
    // Obtener el valor ingresado por el usuario
    var cadena = document.getElementById("cadena").value;

    // Verificar si la cadena contiene solo mayúsculas
    var contieneMayusculas = /[A-Z]/.test(cadena);

    // Verificar si la cadena contiene solo minúsculas
    var contieneMinusculas = /[a-z]/.test(cadena);

    // Obtener el párrafo donde se mostrará el mensaje
    var parrafo = document.getElementById("parrafo");

    // Evaluar los casos y mostrar el mensaje correspondiente
    if (contieneMayusculas && contieneMinusculas) {
        parrafo.textContent = "La cadena contiene tanto mayúsculas como minúsculas.";
    } else if (contieneMayusculas) {
        parrafo.textContent = "La cadena contiene solo mayúsculas.";
    } else if (contieneMinusculas) {
        parrafo.textContent = "La cadena contiene solo minúsculas.";
    } else {
        parrafo.textContent = "La cadena no contiene ni mayúsculas ni minúsculas.";
    }
}
