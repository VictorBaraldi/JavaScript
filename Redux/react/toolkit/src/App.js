import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {state.modal.abrir && <h1>Total: {state.contador.total}</h1>}
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <button onClick={() => dispatch(abrir())}>abrir</button>
      <button onClick={() => dispatch(fechar())}>fechar</button>
    </div>
  );
};
export default App;
