const evento = document.querySelector(".ativar");

// no caso executa a função
function handleClick() {
  console.log("clicou em:", evento);
}

evento.addEventListener("click", handleClick);

// o param especifica o tipo do evento, logo conseguimos ver propiedades do evento
/** @param {MouseEvent} e */
// nesse, o parametro é relacionado com o tipo de ação, nesse caso o e é o click
function handleClicke(e) {
  //.x e .y diz respeito a posição na tela do click
  console.log("clicou em:", e.x, e.y);
  //timeStamp quanto tempo demorou para acontecer click pos refresh
  console.log("clicou em:", e.timeStamp);
  // mostra o target do click, podemos usar assim para evitar acessar uma constante que está fora da função
  console.log("clicou em:", e.currentTarget);
}

evento.addEventListener("click", handleClicke);

const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  //tem o classList add que adiciona a classe, o remove que tira e o toggle que alterna
  texto.classList.toggle("ativar");
}

botao.addEventListener("click", mostrar);
