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
// Arrays - uma array é definida com o tipo de dado que possui ,seguida por []
const numeros = [10, 20, 30, 40];
const valores = [10, '20', 30, '40'];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
// console.log(maiorQue10(numeros));
// console.log(filtarValores(valores));
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
// Sintaxe alternativa - usar Array<type>, sendo o type o tipo do dado dentro da array
const numeros2 = [10, 30, 40, 5, 3, 30];
function maiorQues10(data) {
    return data.filter((n) => n > 10);
}
// Exer -
function fetchCurso() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        mostrarCursos(json);
    });
}
fetchCurso();
function mostrarCursos(cursos) {
    let color;
    cursos.forEach((element) => {
        if (element.nivel === 'iniciante')
            color = 'blue';
        else
            color = 'red';
        document.body.innerHTML += `
    <h1 style= 'color: ${color}'>${element.nome}</h1>
    <p>Horas: ${element.horas}</p>
    <p>Aulas: ${element.aulas}</p>
    <p>Gratuito: ${element.gratuito ? 'Sim' : 'Não'}</p>
    <p>Tags: ${element.tags.join(', ')}</p>
    <p>Aulas: ${element.idAulas.join(' | ')}</p>
    `;
    });
}
