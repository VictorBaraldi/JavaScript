import React from 'react';
import style from '../Styles/Item.module.css';
import { useParams } from 'react-router-dom';

const Item = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    carregar();
    async function carregar() {
      setCarregando(true);
      const buscaDados = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
      );
      const json = await buscaDados.json();
      setDados(json);
      setCarregando(false);
    }
  }, [params]);

  if (!dados) return null;
  return (
    <>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && (
        <div className={style.container}>
          {dados.fotos.map((valor) => (
            <img
              src={valor.src}
              alt=""
              className={style.imagem}
              key={valor.titulo}
            />
          ))}
          <div className={style.texto}>
            <h3>{dados.nome}</h3>
            <span
              style={
                dados.vendido
                  ? { backgroundColor: '#4A2' }
                  : { backgroundColor: 'red' }
              }
              className={style.vendido}
            >
              R$ {dados.preco}
            </span>
            <img src="" alt="" />
            <p className={style.desc}>{dados.descricao}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
