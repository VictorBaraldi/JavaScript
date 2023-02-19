import React from 'react';
import { StorageGlobal } from './Global';
import Limpar from './Limpar';
import Produto from './Produto';

const App = () => {
  return (
    <StorageGlobal>
      <Produto />
      <Limpar />
    </StorageGlobal>
  );
};

export default App;
