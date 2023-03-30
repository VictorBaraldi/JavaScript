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
// Array - não conseguimos verificar com o typeof pois retorna object, logo há dois meios, com o instanceof Array ou Array.isArray()
function FetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        handleCursos(json);
    });
}
FetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log('é instancia de array');
    }
    if (Array.isArray(data)) {
        console.log('é array');
    }
}
// Type Predicate - TS não executa JS, Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.
function isString(value) {
    // basicamente fala: se for string retorna true (so usa com função boolean)
    // verifica se o valor é string ou não e retorna boolean
    return typeof value === 'string';
}
function handleData(data) {
    if (isString(data)) {
        data.toLowerCase();
    }
}
// Objetos - Type predicate pode ser especialmente usado para criar type Guard para objetos específicos e garantir segurança do projeto
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data);
    }
}
//  Exer
function Cursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        handleCurso(json);
        console.log(json);
    });
}
Cursos();
function isCurso(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'aulas' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCurso(data) {
    if (data instanceof Array) {
        data.filter(isCurso).forEach((value) => {
            document.body.innerHTML += `
      <p>Nome: ${value.nome}</p>
      <p>Horas: ${value.horas}</p>
      <p>Aulas ${value.aulas}</p>
    `;
        });
    }
}
