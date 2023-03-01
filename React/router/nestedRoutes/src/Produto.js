import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Descricao from './ProdutoDescricao';
import Customizado from './ProdutoCustomizado';
import Avaliacao from './ProdutoAvaliacao';

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
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Descricao />} />
        <Route path="avaliacao" element={<Avaliacao />} />
        <Route path="customizado" element={<Customizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
