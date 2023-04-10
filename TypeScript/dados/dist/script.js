import Estatisticas from './modules/Estatisticas.js';
import fetchData from './modules/fetchDados.js';
import NormalizarDados from './modules/normalizarDados.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transacoes = data.map(NormalizarDados);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherPagina(lista, countId) {
    const seletor = document.getElementById(countId);
    if (seletor) {
        Object.keys(lista).forEach((key) => (seletor.innerHTML += `<p>${key}: ${lista[key]}</p>`));
    }
}
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    const total = document.querySelector('#total span');
    preencherPagina(data.pagamento, 'pagamento');
    preencherPagina(data.status, 'status');
    if (!total)
        return;
    total.innerText = data.total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    const diaElement = document.querySelector('#dia span');
    if (diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector('#transacoes tbody');
    if (!tabela)
        return;
    transacoes.forEach((item) => {
        tabela.innerHTML += `
    <tr>
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>R$ ${item.moeda}</td>
    <td>${item.pagamento}</td>
    <td>${item.status}</td>
    </tr>
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map