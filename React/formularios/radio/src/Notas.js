import React from 'react';
// No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.
const App = () => {
  const [produto, setProduto] = React.useState(''); // cada grupo deve possuir seu estado

  function handleChande({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          onChange={handleChande}
          name="produto" // por os dois elementos possuirem o mesmo name não precisa verificar com o checked={radio === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChande}
          name="produto"
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
};
