document.getElementById("contactForm").addEventListener("submit", function(event) {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;

  if (nombre === "" || email === "") {
    alert("Por favor completa todos los campos.");
    event.preventDefault();
  } else {
    alert("¡Gracias por tu mensaje, " + nombre + "!");
  }
});
