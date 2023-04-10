import countBy from './countBY.js';
function filtrarValor(value) {
    return value.valor !== null;
}
export default class Estatisticas {
    transcoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(trasacoes) {
        this.transcoes = trasacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        const filtrados = this.transcoes.filter(filtrarValor);
        const valorTotal = filtrados.reduce((acc, valor) => {
            return acc + valor.valor;
        }, 0);
        return valorTotal;
    }
    setPagamento() {
        return countBy(this.transcoes.map((valor) => valor.pagamento));
    }
    setStatus() {
        return countBy(this.transcoes.map((valor) => valor.status));
    }
    setSemana() {
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
            if (dia === 0)
                semana['Domingo'] += 1;
            if (dia === 1)
                semana['Segunda'] += 1;
            if (dia === 2)
                semana['Terça'] += 1;
            if (dia === 3)
                semana['Quarta'] += 1;
            if (dia === 4)
                semana['Quinta'] += 1;
            if (dia === 5)
                semana['Sexta'] += 1;
            if (dia === 6)
                semana['Sabado'] += 1;
        });
        return semana;
    }
    setMelhorDia() {
        const dia = Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        });
        return dia[0];
    }
}
//# sourceMappingURL=Estatisticas.js.map