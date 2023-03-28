"use strict";
// Quando selecionamos um elemento na DOM com querySelector, o objeto retornado depende da string passada no método
document.querySelector('video'); // HTMLVideoElement
document.querySelector('img'); // HTMLImageElement
const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element
const video = document.querySelector('#video'); // no caso não sabe mais que é HTMLVideoElement, logo devemos colocar instanceof
if (video instanceof HTMLVideoElement) {
    video === null || video === void 0 ? void 0 : video.volume;
}
// QuerySelectorAll -  retorna uma nodelist de elementos.
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        // aqui no caso é interessante o instanceof já que os links e o btn foram selecionados pelo links, como so queremos aqueles que sejam link(a) aqui selecionamos
        //console.log(link.href);
    }
});
// Não confundir o nome da interface NodeListOf com o nome da classe NodeList, o retorno do querySelectorAll é um nodelist que possui propriedades diferentes de array
//Exer
links.forEach((link) => {
    if (link instanceof HTMLElement)
        ativarStyle(link);
});
function ativarStyle(link) {
    link.style.color = 'red';
    link.style.border = '1px solid blue';
}
