import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sobre from './Sobre';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
