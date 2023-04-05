export default function NormalizarDados(dados) {
    return {
        nome: dados.Nome,
        data: dados.Data,
        email: dados.Email,
        id: dados.ID,
        status: dados.Status,
        moeda: dados['Valor (R$)'],
        valor: 0,
        pagamento: dados['Forma de Pagamento'],
        novo: Boolean(dados['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarDados.js.map