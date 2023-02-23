import React from 'react';
import Radio from './Radio';

const App = () => {
  const [cor, setCor] = React.useState('azul');

  return (
    <form>
      <Radio options={['azul', 'verde']} value={cor} setValue={setCor} />
    </form>
  );
};

export default App;
