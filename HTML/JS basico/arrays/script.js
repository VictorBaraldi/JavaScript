const lista = ["javascript", "html", "css"];
const body = document.querySelector("body");

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
// }

// método alternativo

// function adicionarBody(item, index) {
//   body.innerHTML += "<li>" + item + "</li>";
// }

// lista.forEach(adicionarBody);

const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);
