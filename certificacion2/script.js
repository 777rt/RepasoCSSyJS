// Requerimiento 1: cambiar la imagen del mapa al hacer clic en "Nuevos Eventos"
const btnNuevos = document.getElementById("btn-nuevos-eventos");
const mapa = document.getElementById("mapa");

btnNuevos.addEventListener("click", function () {
  mapa.src = "img/mapa2.svg";
});

// Requerimiento 2: aumentar los asistentes al hacer clic en el icono de cada evento
const botonesAsistentes = document.querySelectorAll(".btn-asistentes");

botonesAsistentes.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const texto = boton.textContent;
    const numeroActual = texto.replace("↑ ", "") - 0;
    boton.textContent = "↑ " + (numeroActual + 1);
  });
});

// Requerimiento 3: mostrar alerta al hacer clic en "Crear Evento"
const btnCrearEvento = document.getElementById("btn-crear-evento");

btnCrearEvento.addEventListener("click", function () {
  alert("evento creado");
});
