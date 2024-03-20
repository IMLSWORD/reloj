// Función para actualizar la hora
function actualizarHora() {
    // Obtener el elemento con el id "hora"
    const horaElemento = document.getElementById("hora");

    // Obtener la hora actual
    const now = new Date();
    const hora = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();

    // Formatear la hora
    const horaFormateada = `${hora}:${minutos}:${segundos}`;

    // Asignar la hora al contenido del elemento
    horaElemento.textContent = horaFormateada;
}

// Llamar a la función inicialmente para mostrar la hora actual
actualizarHora();

// Establecer un intervalo para actualizar la hora cada segundo
setInterval(actualizarHora, 1000);




