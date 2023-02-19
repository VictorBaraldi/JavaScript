import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []); //por ser lento, deixamos na memoria do useMemo, essa função so vai ser executada uma vez por receber o array em branco.
  console.log(valor);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
