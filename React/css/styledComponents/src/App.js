import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 2em;
  color: tomato;
`;

//Podemos passar propriedades como em um component de React.
const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

//Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.
const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

//Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.
const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  //O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript. Esses valores são passados como argumento da função.
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 10;
  template`São ${total} no total`;

  return (
    <div>
      <Titulo> Meu Título</Titulo>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Ativar
      </Button>
    </div>
  );
};

export default App;
