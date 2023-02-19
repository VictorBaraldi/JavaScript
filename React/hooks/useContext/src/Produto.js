import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  return (
    <div>
      <p>{global.contar}</p>
      <button onClick={() => global.contarUm()}>clique</button>
    </div>
  );
};

export default Produto;
