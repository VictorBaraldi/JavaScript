import moedaToNumb from './moedaToNumb.js';
import toDate from './stringToDate.js';

export default function NormalizarDados(dados: DataAPI): Data {
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

declare global {
  type TipoPagamento = 'Boleto' | 'Cartão de Crédito';
  type StatusPagamento =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando Pagamento'
    | 'Estornada';

  interface DataAPI {
    Nome: string;
    Data: string;
    Email: string;
    ID: number;
    Status: StatusPagamento;
    ['Forma de Pagamento']: TipoPagamento;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
  }

  interface Data {
    nome: string;
    data: Date;
    email: string;
    id: number;
    status: StatusPagamento;
    moeda: string;
    valor: number | null;
    pagamento: TipoPagamento;
    novo: boolean;
  }
}
