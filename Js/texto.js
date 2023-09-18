
/******************** reproducir texto ************************/
const textoModal = document.getElementById('textoModal-chichen');
const reproducirTextoBtn = document.getElementById('reproducirTexto-chichen');
const detenerTextoBtn = document.getElementById('detenerTexto');
const detenerTexto1Btn = document.getElementById('detenerTexto1');

let synthesis; // Declarar la variable synthesis fuera de la función para que sea accesible desde otras funciones.

// Función para reproducir el texto
function reproducirTexto() {
    // Verifica si la API SpeechSynthesis está disponible en el navegador
    if ('speechSynthesis' in window) {
        // Detiene la reproducción si ya está en curso
        if (synthesis && synthesis.speaking) {
            synthesis.cancel();
        }

        // Crea un objeto de síntesis de voz
        synthesis = window.speechSynthesis;

        // Crea un objeto de síntesis de voz para el texto en el modal
        const mensaje = new SpeechSynthesisUtterance(textoModal.textContent);


        // Reproduce el mensaje
        synthesis.speak(mensaje);
    } else {
        alert('La síntesis de voz no es compatible con este navegador.');
    }
}

// Función para detener la reproducción
function detenerTexto() {
    if (synthesis && synthesis.speaking) {
        synthesis.cancel();
    }
}

// funcion para detener texto con la X
function detenerTexto1() {
    if (synthesis && synthesis.speaking) {
        synthesis.cancel();
    }
}

// Agrega eventos clic a los botones de reproducción y detención
reproducirTextoBtn.addEventListener('click', reproducirTexto);
detenerTextoBtn.addEventListener('click', detenerTexto);
detenerTexto1Btn.addEventListener('click', detenerTexto1);

/******************** Fin de reproducir texto ************************/

/******************** Realidad Aumnetada ****************************/

// Obtén referencias a los elementos del DOM
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorRealidadAumentada = document.getElementById('contenedorRealidadAumentada');
const btnMostrarRealidadAumentada = document.getElementById('btnMostrarRealidadAumentada');
const btnVolverTarjetas = document.getElementById('btnVolverTarjetas');

// Función para mostrar la realidad aumentada y ocultar las tarjetas
function mostrarRealidadAumentada() {
    contenedorTarjetas.style.display = 'none';
    contenedorRealidadAumentada.style.display = 'block';
    btnMostrarRealidadAumentada.style.display = 'none';
    btnVolverTarjetas.style.display = 'block';
}

// Función para volver a las tarjetas y ocultar la realidad aumentada
function volverTarjetas() {
    contenedorRealidadAumentada.style.display = 'none';
    contenedorTarjetas.style.display = 'block';
    btnVolverTarjetas.style.display = 'none';
    btnMostrarRealidadAumentada.style.display = 'block';
}

// Agrega eventos clic a los botones
btnMostrarRealidadAumentada.addEventListener('click', mostrarRealidadAumentada);
btnVolverTarjetas.addEventListener('click', volverTarjetas);

/******************** fin de Realidad Aumnetada ****************************/

/******************** Inicio de carrusel de fondo ****************************/
// JavaScript para cambiar las imágenes del carrusel automáticamente cada 3 segundos
const imagenesCarrusel = document.querySelectorAll('.imagen-carrusel');
let indiceImagenActual = 0;

function cambiarImagen() {
    imagenesCarrusel[indiceImagenActual].style.display = 'none';
    indiceImagenActual = (indiceImagenActual + 1) % imagenesCarrusel.length;
    imagenesCarrusel[indiceImagenActual].style.display = 'block';
}

// Mostrar la primera imagen
imagenesCarrusel[0].style.display = 'block';

// Cambiar automáticamente las imágenes cada 4.5 segundos (3000 milisegundos)
setInterval(cambiarImagen, 4500);


/******************** fin de carrusel de fondo ****************************/

