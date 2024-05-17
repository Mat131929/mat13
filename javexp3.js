function palindrome(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] !== " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break; // No es necesario seguir comparando si ya encontramos una diferencia
        }
    }
    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    return resultado;
}

function checkPalindrome() {
    var input = document.getElementById("phraseInput").value;
    var result = palindrome(input);
    document.getElementById("resultParagraph").textContent = result;
}