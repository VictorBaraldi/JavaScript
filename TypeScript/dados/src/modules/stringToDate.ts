export default function toDate(texto: string): Date {
  const [data, tempo] = texto.split(' ');
  const [dia, mes, ano] = data.split('/').map(Number);
  const [hora, minuto] = tempo.split(':').map(Number);
  const Data = new Date(ano, mes - 1, dia, hora, minuto);
  return Data;
}
