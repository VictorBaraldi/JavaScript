import React from 'react';
import Head from '../Component/Head';
import foto from '../images/contato.jpg';
import style from '../Styles/Item.module.css';

const Contato = () => {
  return (
    <div className={`${style.container} ${style.anima}`}>
      <Head title="Ranek | Contato" />
      <img src={foto} alt="" className={style.imagem} />
      <div className={style.texto}>
        <h2>Entre em contato.</h2>
        <ul>
          <li>andre@origamod.com</li>
          <li>99999-9999</li>
          <li>Rua ali perto, 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
