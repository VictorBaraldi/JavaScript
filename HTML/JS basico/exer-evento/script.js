const circulo = document.querySelector(".circulo");

function movimentar(e) {
  circulo.style.top = e.y + "px";
  circulo.style.left = e.x + "px";
}

window.addEventListener("mousemove", movimentar);
