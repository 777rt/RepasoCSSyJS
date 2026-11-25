// Requerimiento 1: al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
const linkFlores = document.getElementById("link-flores");

linkFlores.addEventListener("mouseover", function () {
  this.textContent = "Envía Bouquets";
});

linkFlores.addEventListener("mouseout", function () {
  this.textContent = "Envía Flores";
});

// Requerimiento 2: al hacer clic en un botón "Comprar", ese botón desaparece
const botonesComprar = document.querySelectorAll(".btn-comprar");

botonesComprar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    this.remove();
  });
});

// Requerimiento 3: al hacer clic en "Iniciar Sesión", muestra alerta de bienvenida
const btnSesion = document.getElementById("btn-iniciar-sesion");

btnSesion.addEventListener("click", function () {
  alert("¡Bienvenido!");
});
