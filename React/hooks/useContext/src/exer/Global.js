import React from 'react';

export const GlobalContext = React.createContext();

export const StorageGlobal = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((dados) => dados.json())
      .then((json) => setDados(json));
  }, []);

  const limpaDados = () => {
    setDados(null);
  };

  return (
    <GlobalContext.Provider value={{ dados, limpaDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
