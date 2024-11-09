// --- Contador ---
let contador = 0;
let incremento = 1;
const boton = document.getElementById("incrementButton");
const displayContador = document.getElementById("contador");

boton.addEventListener("click", function() {
    contador += incremento;
    displayContador.textContent = contador;

    if (contador % 5 === 0) {
        incremento += 1;
    }

    if (contador >= 100) {
        boton.disabled = true;
    }
});

// --- Caja de Texto ---
const inputTexto = document.getElementById("textoInput");
inputTexto.addEventListener("blur", function() {
    inputTexto.value = inputTexto.value.toUpperCase();
});

// --- Imagen que cambia ---
const imagen = document.getElementById("imagen");
imagen.addEventListener("mouseenter", function() {
    imagen.src = "/img/img2.jpg";
});
imagen.addEventListener("mouseleave", function() {
    imagen.src = "/img/img1.jpg";
});

// --- Tamaño de Texto ---
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
let tamañoActual = 16;

document.getElementById("aumentar").addEventListener("click", function() {
    tamañoActual += 2;
    ajustarTamañoTexto();
});

document.getElementById("disminuir").addEventListener("click", function() {
    if (tamañoActual > 16) {
        tamañoActual -= 2;
        ajustarTamañoTexto();
    }
});

function ajustarTamañoTexto() {
    titulo.style.fontSize = `${tamañoActual}px`;
    contenido.style.fontSize = `${tamañoActual}px`;
}
