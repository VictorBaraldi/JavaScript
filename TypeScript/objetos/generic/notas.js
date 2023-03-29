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
var _a, _b;
//  Generics - um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
/*
 * function retorna(a: number | string | boolean) { - Quando realizamos desse modo, além de ter que * * especificar todo tipo de dado que vai trabalhar na função, quando chamamos ela, ainda não se sabe o * tipo, logo não tem acesso aos métodos dela.
 *   return a;
 * }
 * retorna('teste');
 * retorna(200);
 */
function retorna(a) {
    return a;
}
retorna('teste'); // reconhece que o dado inserido é string, logo retorno é string
retorna(200); //nesse caso por ser mais simples reconhece auto, mas em casos é necessario informar tipo entre<>
// é a mesma coisa que:
/**
 * function retorna<string>(a: string): string { - sabe que a partir de string retorna uma string
 *  return a;
 *  }
 */
//  Generics - caso real
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['maça', 'pera', 'uva', 'morango', 'kiwi', 'banana', 'melancia'];
function firstFive(lista) {
    //                 tipo       valor recebido    valor retornado
    return lista.slice(0, 5);
} // aqui cria uma função que recebe uma array e retorna os 5 primeiros elementos
firstFive(numeros);
firstFive(frutas);
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
(_a = notNull('teste')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
(_b = notNull(200)) === null || _b === void 0 ? void 0 : _b.toFixed;
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado('teste');
tipoDado(200);
//  Extends - É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
function extractText(el) {
    //se for generic, não sabe o valor de el, logo especificamos
    return {
        texto: el.innerText,
        el,
    };
}
const link = document.querySelector('a');
if (link) {
    extractText(link).el.href;
}
//  Métodos - Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
const link2 = document.querySelector('.link');
link2 === null || link2 === void 0 ? void 0 : link2.href;
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData('https://api.origamid.dev/json/notebook.json');
        console.log(notebook.nome);
    });
}
