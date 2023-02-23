import React from 'react';
import Checkbox from './Checkbox';

const App = () => {
  const [frutas, setFrutas] = React.useState([]);

  return (
    <form>
      <Checkbox
        options={['banana', 'uva', 'morango']}
        value={frutas}
        setValue={setFrutas}
      />
    </form>
  );
};

export default App;
