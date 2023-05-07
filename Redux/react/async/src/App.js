import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <form action="">
        <label htmlFor="username">Usuário</label>
        <input style={{ display: 'block' }} type="text" id="username" />
        <label htmlFor="password">Senha</label>
        <input style={{ display: 'block' }} type="text" id="password" />
      </form>
    </div>
  );
};
export default App;
