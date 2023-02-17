import React from 'react';
import Produto from './Produto';

const Exer = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleCLick(e) {
    setCarregando(true);
    const awaitFetch = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const json = await awaitFetch.json();
    setCarregando(false);
    setDados(json);
  }

  return (
    <>
      <button onClick={handleCLick}>notebook</button>
      <button onClick={handleCLick}>smartphone</button>
      <button onClick={handleCLick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};
export default Exer;
