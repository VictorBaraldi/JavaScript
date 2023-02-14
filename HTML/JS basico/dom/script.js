// selecionando os elementos na dom, pode ser classe ou tag em si
const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

//Puxa o valor que está dentro da tag HTML
console.log(produtos.innerHTML);

//Puxa o link da página
console.log(produtos.href);

//Removendo o elemento
//produtos.remove();

//com o .style podemos alterar características de estilo da página
nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

// com o .classList podemos manipular as classes de um elemento, no caso adicionamos a classe ativo
nav.classList.add("ativo");
