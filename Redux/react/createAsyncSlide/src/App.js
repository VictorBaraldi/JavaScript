import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/login';

const App = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input
          style={{ display: 'block' }}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          style={{ display: 'block' }}
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default App;
