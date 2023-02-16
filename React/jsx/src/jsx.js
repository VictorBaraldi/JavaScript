import React from 'react';

//JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.
const App = () => {
  return <button>Comprar</button>;
};
//É transformado em
const AppTrans = () => {
  return React.createElement('button', null, 'Comprar');
};

//Atributos podem ser passados como no HTML, porém com alguns casos especiais.
const AppAtributos = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};

// Casos especiais - o mais comum é com o atributo class, em JS é reservado, logo em JSX foi mudado para className para evitar conflitos
const AppClass = () => {
  return <div className="grid">Origamid</div>;
};
const AppFor = () => {
  return (
    //For tambem é reservado
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};

// camelCase - atributos com nomes compostos devem ser utilizados como camelCase no jsx, autoplay vira autoPlay

// Expressões - Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.
const AppExpressões = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};

//O style irá receber um objeto com as propriedades do elemento em camelCase.
const AppStyle = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};
