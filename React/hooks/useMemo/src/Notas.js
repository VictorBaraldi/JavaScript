import React from 'react';

// useMemo - memoriza um valor, evitando a recriação do mesmo toda vez que um componente for atualizadp, recebe um callback e uma array de dependencia
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, []);
  console.log(valor);
  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
// Serve para casos em que você faz uma operação lenta para retornar um valor.
