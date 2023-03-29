"use strict";
var _a, _b, _c;
// A interface de uma função é definida durante a sua declaração.
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 5);
// Void - em JS uma função sem nenhum return irá retornar undefined. No TS o retorno é definido como void, evitando erro como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.background = cor;
}
// Erro, void não pode ser verificado
//if (pintarTela('black')) {}
const btn = document.querySelector('button');
// Erro, void não pode ser verificado
//if (btn && btn.click()) {}
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
if (isString('teste')) {
    console.log('É string');
}
// Never - é utilizado em casos onde a função gera um erro ou termina a aplicação.
function abortar(mensagem) {
    //: never {
    // throw new Error(mensagem);
}
abortar('Um erro ocorreu');
function calcular(forma) {
    forma.quadrado(3);
}
// Overload - Existem funções que retornam diferentes dados dependendo do argumento.Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.O Overload deve ser compatível com a função original.
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar('teste'); //Desta forma não reconhece se o retorno é string ou array
function normalizar2(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar2('teste'); //quando colocamos o overload antes da função, ele passa a reconhecer os metodos
function $(selector) {
    return document.querySelector(selector);
}
(_a = $('a')) === null || _a === void 0 ? void 0 : _a.href;
(_b = $('video')) === null || _b === void 0 ? void 0 : _b.volume;
(_c = $('.teste')) === null || _c === void 0 ? void 0 : _c.innerHTML;
function arredondar(valor) {
    if (typeof valor === 'string') {
        return Math.ceil(Number(valor)).toString();
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar(1.3));
console.log(arredondar('1.3'));
