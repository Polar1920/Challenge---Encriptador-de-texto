// Variables
const texto = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");

let text;

// Funciones

function limpiarImagen() {
    document.getElementById("resultado").style.backgroundImage = "none";
}

function copiar() {
    resultado.select();
    //resultado.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(resultado.value);
}

function encriptar() {
    if (texto.value) {
        text = texto.value
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

        resultado.value = text;
        texto.value = "";
        limpiarImagen();
    }
}

function desencriptar() {
    if (texto.value) {
        text = texto.value
            .replaceAll("ai", "a")
            .replaceAll("imes", "i")
            .replaceAll("enter", "e")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        resultado.value = text;
        texto.value = "";
        limpiarImagen();
    }
}