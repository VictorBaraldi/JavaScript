import React from 'react';

// Estado - estado da aplicação representa as características dela naquele momento, exemplo: dados carregados, botão ativo.
const App = () => {
  const ativo = true;
  return (
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
  );
};

//Hooks - são funções especiais do React que permite controlar o estado e ciclo de componentes funcionais.
const AppHook = () => {
  const [ativo, setAtivo] = React.useState(true);
  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

//UseState - O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

//Múltiplos Estados - Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.
const AppMult = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Victor', idade: '24' });
  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Sim' });
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

// Reatividade - Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.
const AppRea = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);
  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }
  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }
  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};

// Callback - podemos passar uma função de callback para atualizar o estado, a função recebe um parâmetro que representa o valor anterior e modifica o es
const AppCall = () => {
  const [ativo, setAtivo] = React.useState(true);
  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }
  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};

// React.StrictMode - O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas. Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.
const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};
