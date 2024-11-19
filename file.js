// Selecciona el botón por su ID
const boton = document.getElementById("btnDegradado");

// Agrega el evento de clic
boton.addEventListener("click", () => {
  // Aplica el degradado al fondo del body
  document.body.style.background = "linear-gradient(to bottom, cyan, blue)";
});