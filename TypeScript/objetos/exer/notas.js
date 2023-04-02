"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
const form = document.getElementById('form');
if (form instanceof HTMLElement) {
    form.addEventListener('keyup', handleKey);
}
function isUserData(value) {
    if (value &&
        typeof value === 'object' &&
        ('nome' in value || 'email' in value || 'cpf' in value)) {
        return true;
    }
    else {
        return false;
    }
}
function handleKey(e) {
    if (e.target instanceof HTMLInputElement) {
        window.userData = Object.assign(Object.assign({}, window.userData), { [e.target.id]: e.target.value });
        const json = JSON.stringify(window.userData);
        localStorage.setItem('userData', json);
    }
}
function jsonVerify(data) {
    try {
        JSON.parse(data);
        return true;
    }
    catch (e) {
        return false;
    }
}
function setDados() {
    const data = localStorage.getItem('userData');
    const formInputs = document.querySelectorAll('input');
    if (data && jsonVerify(data)) {
        const dados = JSON.parse(data);
        if (isUserData(dados)) {
            formInputs.forEach((value) => {
                value.value = dados[value.id];
            });
        }
    }
}
setDados();
