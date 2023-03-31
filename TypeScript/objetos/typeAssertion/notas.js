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
// as - com type assertion é possível indicar ao TS qual o tipo de dado esperado com a palavra as, Só é possível indicar tipos que possuam relação com o tipo original. Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
const video = document.querySelector('.player');
video === null || video === void 0 ? void 0 : video.volume; // no caso é undefined, já que não existe, confia na pessoa e não verifica se existe e se é video mesmo
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        return response.json();
    });
}
function handleProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProduto();
        console.log(produto.preco);
    });
}
handleProduto();
// ! non-null operator - indica que não existe a possibilidade do dado ser null, deve tomar cuidado pois pode levar a erros, operador de TS
const videoNon = document.querySelector('video');
// basicamente com a inserção do ! ele considera que existe
videoNon.volume;
// erro runtime
document.querySelector('a').href = 'https://www.origamid.com';
// Outras sintaxes
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video1.volume;
video2.volume;
video3 === null || video3 === void 0 ? void 0 : video3.volume;
video4.volume;
