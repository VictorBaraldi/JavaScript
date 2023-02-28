import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import DogSVG from './dogSVG'; // como o svg é um componente podemos mudar diretamente ele

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSVG color={'black'} />
      <DogSVG color={'red'} />
      <img src={foto} alt="cachorro" />
    </div>
  );
};

export default App;
