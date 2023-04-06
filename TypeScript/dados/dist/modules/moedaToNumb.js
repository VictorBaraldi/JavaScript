export default function moedaToNumb(valor) {
    const numero = Number(valor.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaToNumb.js.map