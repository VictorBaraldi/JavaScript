import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation(); //Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.
  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
