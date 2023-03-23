"use strict";
// Para indicar o tipo do dado de uma variável, podemos usar :tipo
const produto = 'livro';
let preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
// Inferência - o TS consegue inferir o tipo de dado de expressões em JS, quando isso ocorrer não precisa fazer a anotação do dado
const produto2 = 'carro';
let preco2 = 25000;
//consegue determinar o tipo sem declarar
const carro2 = {
    marca: 'Fiat',
    portas: 4,
};
// As anotações são necessárias quando lidamos con funções
function soma(a, b) {
    return a + b;
}
const xbox = {
    nome: 'xbox',
    preco: '2000',
};
function transformaPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const novoPreco = transformaPreco(xbox);
console.log(novoPreco);
//Exer1
// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' DeSigN '));
//Exer2
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
