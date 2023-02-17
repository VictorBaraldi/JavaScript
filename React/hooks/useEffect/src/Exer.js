import React from 'react';
import Produtos from './Produtos';

const Exer = () => {
  const [produto, setProduto] = React.useState(null);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    if (produto !== null) {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  React.useEffect(() => {
    const storage = localStorage.getItem('produto');
    if (storage !== null) setProduto(storage);
  }, []);

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produtos prod={produto} />}
    </>
  );
};

export default Exer;
