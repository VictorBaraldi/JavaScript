import React from 'react';
import { GlobalContext } from './Global';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <>
      <div>{dados[0].nome}</div>
    </>
  );
};

export default Produto;
