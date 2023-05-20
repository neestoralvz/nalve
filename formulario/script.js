// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario
  
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Aquí puedes realizar las acciones que desees con los datos, como enviarlos a un servidor o almacenarlos en una base de datos
  
    // Por ejemplo, imprimir los datos en la consola
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Mensaje: " + mensaje);
  
    // Puedes mostrar un mensaje de éxito o redireccionar a otra página
    alert("¡Formulario enviado con éxito!");
  
    // Limpiar el formulario
    document.getElementById("myForm").reset();
  }
  
  // Asignar el evento de envío al formulario
  document.getElementById("myForm").addEventListener("submit", enviarFormulario);
  