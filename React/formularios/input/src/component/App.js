import React from 'react';
import Input from './Input';

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        value={nome}
        setValue={setNome}
        type="text"
      />
      <button>Enviar</button>
      {nome}
    </form>
  );
};

export default App;
