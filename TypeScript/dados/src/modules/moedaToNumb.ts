/**
 * Recebe o valor em string, exemplo: 1.200,000 e o retorna em número: 1200.00
 */
export default function moedaToNumb(valor: string): number | null {
  const numero = Number(valor.replaceAll('.', '').replace(',', '.'));
  return isNaN(numero) ? null : numero;
}
