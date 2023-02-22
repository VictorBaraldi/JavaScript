import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');

  function handleChande({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          onChange={handleChande}
          name="produto"
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

export default App;
