import countBy from './countBY.js';

type DataValor = Data & { valor: number };

function filtrarValor(value: Data): value is DataValor {
  return value.valor !== null;
}

export default class Estatisticas {
  private transcoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;
  constructor(trasacoes: Data[]) {
    this.transcoes = trasacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }
  private setTotal() {
    const filtrados = this.transcoes.filter(filtrarValor);
    const valorTotal = filtrados.reduce((acc, valor) => {
      return acc + valor.valor;
    }, 0);
    return valorTotal;
  }

  private setPagamento() {
    return countBy(this.transcoes.map((valor) => valor.pagamento));
  }

  private setStatus() {
    return countBy(this.transcoes.map((valor) => valor.status));
  }

  private setSemana() {
    const semana = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sabado']: 0,
    };
    this.transcoes.forEach((valor) => {
      const dia = valor.data.getDay();
      if (dia === 0) semana['Domingo'] += 1;
      if (dia === 1) semana['Segunda'] += 1;
      if (dia === 2) semana['Terça'] += 1;
      if (dia === 3) semana['Quarta'] += 1;
      if (dia === 4) semana['Quinta'] += 1;
      if (dia === 5) semana['Sexta'] += 1;
      if (dia === 6) semana['Sabado'] += 1;
    });
    return semana;
  }

  private setMelhorDia() {
    const dia = Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    });
    return dia[0];
  }
}
