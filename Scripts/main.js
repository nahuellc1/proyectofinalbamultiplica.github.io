function limpiarFormulario() {
    let button = document.getElementById("form-control");
    mostrarMensaje();
    formulario.reset();
}

function mostrarMensaje() {
    // Mostrar el mensaje
    alert("Su información ha sido enviada con éxito!");
}
