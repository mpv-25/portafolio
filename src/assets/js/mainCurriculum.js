"use strict";
//Calcular las dimensiones a cargar la pagina
window.onload = function () {
  this.calcular();
};

//detectar cambios de resolucion
window.addEventListener("resize", function () {
  this.calcular();
});

function calcular() {
  const aside = document.querySelector("#aside");
  const section = document.querySelector("#section");
  const imagen__oscura = document.querySelector("#imagen__oscura");
  const imagen = document.querySelector("#imagen");

  //calculamos el height del aside
  aside.style.height = `${section.clientHeight}px`;
  //calulamos el width de imagen__oscura
  imagen__oscura.style.width = `${aside.clientWidth}px`;
  //calculamos el height de imagen_oscura
  imagen__oscura.style.height = `${imagen.clientHeight / 2}px`;
}
