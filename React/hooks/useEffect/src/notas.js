import React from 'react';

//useEffect - todo componente possui um ciclo de vida, os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.
const App = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  }, []);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

//No useEffect se define 2 argumentos, o primeiro é o callback que será executada, o segundo é uma array com uma liosta de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.
const App2 = () => {
  const [contar, setContar] = React.useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

// Dependências Obrigatórias - Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.
const App3 = () => {
  const [contar, setContar] = React.useState(0);
  const titulo = 'Clicou ';

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar)
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

// Componente Montou O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.
const AppMontar = () => {
  const [contar, setContar] = React.useState(1);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <p>{dados.nome}</p>
          <p>{dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

//Múltiplos efeitos - Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
const AppMulti = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
