import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="sobre">Sobre</NavLink>
    </nav>
  );
};

export default Header;
