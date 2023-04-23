import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  //recebemos uma função com o estado, podendo retornar um estado específico, ex: (state) => state.user
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>total = {state}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        Incrementar
      </button>
    </div>
  );
};
export default App;
