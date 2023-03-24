"use strict";
// Null - representa ausencia de valor, é comum em funções do DOM que fazem uma busca retornar quando não da certo.
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
if (button)
    button.click();
button === null || button === void 0 ? void 0 : button.click();
console.log(typeof null);
// Undefined - undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total;
console.log(total); // undefined
// Propriedades Opcionais - tem como definir propriedades opcionais usando propriedade?: string, Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.
