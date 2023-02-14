const contador = document.querySelector(".contador");
const btnSoma = document.querySelector(".btn-adc");

function soma() {
  if (contador.innerHTML < 9) {
    contador.innerHTML = Number(contador.innerHTML) + 1;
  } else {
    console.log("Número máximo atingido");
  }
}

if (btnSoma) {
  btnSoma.addEventListener("click", soma);
}
