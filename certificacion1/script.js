// Botones de categoría: cambia el color del botón seleccionado
const botonesCategoria = document.querySelectorAll(".boton-categoria");

botonesCategoria.forEach(function (boton) {
  boton.addEventListener("click", function () {
    botonesCategoria.forEach(function (otroBoton) {
      otroBoton.classList.remove("activa");
    });

    boton.classList.add("activa");
  });
});

// Corazones: suman un me gusta
const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function (tarjeta) {
  const botonCorazon = tarjeta.querySelector(".boton-corazon");
  const numeroLikes = tarjeta.querySelector(".numero-likes");

  botonCorazon.addEventListener("click", function () {
    let numeroActual = numeroLikes.textContent - 0;
    numeroLikes.textContent = numeroActual + 1;
  });
});

// Cerrar sesión
const botonCerrarSesion = document.getElementById("boton-cerrar-sesion");

botonCerrarSesion.addEventListener("click", function () {
  alert("Sesion cerrada correctamente");
});


