"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Tuples são arrays que possuem dados em posições fixas
const produto1 = ['Notebook', 2500];
const produto2 = ['Notebook', 2500];
//no produto1 é uma array que pode conter string e number, já o segundo é uma array que vai receber em ordem, uma string e um number
const nome1 = produto1[0]; // pode ser str ou numb, logo n tem acesso a props
const nome2 = produto2[0]; // str, tem acesso
// as const torna um dado readonly e infere o tipo de dado mais específico possível, em métodos que retornam arrays as mesmas são transformadas em tuples
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText('button');
if (button) {
    const [buttonElement, buttonText] = button;
}
//exer
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
function fetchDados() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/vendas.json');
        const dados = yield response.json();
        somarValores(dados);
    });
}
function somarValores(vendas) {
    // Com for loop
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;
    // Com reduce
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}
fetchDados();
