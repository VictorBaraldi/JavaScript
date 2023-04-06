export default function toDate(texto) {
    const [data, tempo] = texto.split(' ');
    const [dia, mes, ano] = data.split('/').map(Number);
    const [hora, minuto] = tempo.split(':').map(Number);
    const Data = new Date(ano, mes - 1, dia, hora, minuto);
    return Data;
}
//# sourceMappingURL=stringToDate.js.map