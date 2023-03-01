import React from 'react';
import style from '../Styles/Produto.module.css';
import { NavLink } from 'react-router-dom';
import Head from '../Component/Head';

const Produtos = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((dado) => dado.json())
      .then((json) => setDados(json));
  }, []);

  if (!dados) return null;
  return (
    <div className={style.container}>
      <Head title="Ranek" />
      {dados.map((valor) => (
        <div className={style.item} key={valor.id}>
          <NavLink to={`produtos/${valor.id}`}>
            <img src={valor.fotos[0].src} alt="" className={style.foto} />
          </NavLink>
          <h3>{valor.nome}</h3>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
