import fetchData from './modules/fetchDados.js';
import NormalizarDados from './normalizarDados.js';

async function handleData() {
  const data = await fetchData<DataAPI[]>(
    'https://api.origamid.dev/json/transacoes.json',
  );
  if (!data) return;
  const transacoes = data.map(NormalizarDados);
  console.log(transacoes);
}
handleData();
