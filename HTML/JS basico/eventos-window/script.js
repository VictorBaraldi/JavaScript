console.log(window);

// pode usar o height p altura
const larguraTela = window.innerWidth;

function tamanhoTela(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

function scroll() {
  console.log("usou o scroll");
}

window.addEventListener("mousemove", tamanhoTela);
window.addEventListener("scroll", scroll);
