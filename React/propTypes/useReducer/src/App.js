import React from 'react';
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error('erro action não existe');
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  //Com useState

  //const [contar, setContar] = React.useState(0);
  // function aumentar() {
  //   setContar(contar + 1);
  // }
  // function diminuir() {
  //   setContar(contar - 1);
  // }

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      {state}
      <Exemplo />
    </div>
  );
};

export default App;
