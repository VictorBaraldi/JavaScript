import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contato from './Paginas/Contato';
import Produtos from './Paginas/Produtos';
import Header from './Component/Header';
import Itens from './Paginas/Itens';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path=":id" element={<Itens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
