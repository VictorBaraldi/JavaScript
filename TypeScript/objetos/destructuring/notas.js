"use strict";
// Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
const { body } = document;
function handleData({ nome, preco }) {
    console.log(nome);
    console.log(preco);
}
handleData({
    nome: 'notebook',
    preco: 2000,
});
// Conhecer dados - durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TS, ex currentTarget pode ser eventTarget | null
function handleCLick1({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget.innerHTML);
    }
    console.log(pageX);
}
function handleCLick({ currentTarget, pageX }) {
    //pode declarar o grupo, apesar que se for evento de outro tipo da erro
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget.innerHTML);
    }
    console.log(pageX);
}
document.documentElement.addEventListener('click', handleCLick);
//...rest - O operador ...rest retorna uma Array.
function comparar(tipo, ...numeros) {
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
}
console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
