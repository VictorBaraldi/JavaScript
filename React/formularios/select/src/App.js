import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState(''); //valor inicial
  //Defina o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor.
  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option value="" disabled></option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
