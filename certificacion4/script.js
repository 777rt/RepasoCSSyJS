// Requerimiento 1: alerta al hacer clic en "Donar"
const btnDonar = document.getElementById("btn-donar");

btnDonar.addEventListener("click", function () {
  alert("Gracias por tu donación");
});

// Requerimiento 2: botones "Adoptar" cambian a "Adoptado" y cambian de color
const botonesAdoptar = document.querySelectorAll(".btn-adoptar-arbol");

botonesAdoptar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    this.textContent = "Adoptado";
    this.style.backgroundColor = "#2e7d32";
  });
});

// Requerimiento 3: actualizar texto al cambiar el valor del select
const selectFiltro = document.getElementById("select-filtro");
const textoFiltro = document.getElementById("texto-filtro");

selectFiltro.addEventListener("change", function () {
  textoFiltro.textContent = "Mostrando: " + this.value;
});
