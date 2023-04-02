"use strict";
// duck typing - Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface."Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia
const produto1 = {
    nome: 'computador',
    quantidade: 10,
    precp: 1000,
};
const servico = {
    // esse não aceita, pode ter a mais, a menos não
    nome: 'instalação',
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
const artigo = {
    titulo: 'Aprender',
    visualizacoes: 2000,
    tags: ['HTML', 'CSS'],
    autor: 'Victor',
};
// Record - define a interfce de um objeto que possui <chave, tipo>. pode ser usado para definir a inteface de um objeto literal genérico
