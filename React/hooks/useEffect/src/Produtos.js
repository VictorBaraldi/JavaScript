import React, { useState } from 'react';

const Produtos = ({ prod }) => {
  const [dados, setDados] = useState(null);

  React.useEffect(() => {
    if (prod !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${prod}`)
        .then((dados) => dados.json())
        .then((json) => setDados(json));
    }
  }, [prod]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produtos;
