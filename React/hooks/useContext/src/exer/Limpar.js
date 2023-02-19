import React from 'react';
import { GlobalContext } from './Global';

const Limpar = () => {
  const { limpaDados } = React.useContext(GlobalContext);
  return <button onClick={limpaDados}>Limpar</button>;
};

export default Limpar;
