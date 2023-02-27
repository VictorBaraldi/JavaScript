import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [pergunta, setPergunta] = React.useState();
  const [respostas, setRespostas] = React.useState([]);

  function handleClick(e) {
    e.preventDefault();
    setRespostas([...respostas, pergunta]);
    setCounter((count) => count + 1);
    acertosFeitos();
  }

  function acertosFeitos() {
    let counter = 0;
    respostas.forEach((valor, index) => {
      if (valor === perguntas[index].resposta) counter++;
    });
    return counter;
  }

  return (
    <>
      {counter < 4 && (
        <fieldset
          style={{
            padding: '2rem',
            marginBottom: '1rem',
            border: '2px solid #eee',
          }}
        >
          <legend>
            <h1>{perguntas[counter].pergunta}</h1>
          </legend>
          <form>
            <Radio
              options={perguntas[counter].options}
              value={pergunta}
              setValue={setPergunta}
            />
            <p>
              <button onClick={handleClick}>Próxima</button>
            </p>
          </form>
        </fieldset>
      )}
      {counter >= 4 && <p>Você acertou {acertosFeitos()} de 4</p>}
    </>
  );
};

export default App;
