import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <button>
        {' '}
        <NavLink to="/">Produtos</NavLink>
      </button>
      <button>
        {' '}
        <NavLink to="contato">Contato</NavLink>
      </button>
    </div>
  );
};

export default Header;
