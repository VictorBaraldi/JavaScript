import moedaToNumb from './moedaToNumb.js';
import toDate from './stringToDate.js';
export default function NormalizarDados(dados) {
    return {
        nome: dados.Nome,
        data: toDate(dados.Data),
        email: dados.Email,
        id: dados.ID,
        status: dados.Status,
        moeda: dados['Valor (R$)'],
        valor: moedaToNumb(dados['Valor (R$)']),
        pagamento: dados['Forma de Pagamento'],
        novo: Boolean(dados['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarDados.js.map