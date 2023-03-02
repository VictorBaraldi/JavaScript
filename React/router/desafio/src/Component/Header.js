import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <NavLink to="/" className={styles.link}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="contato" className={styles.link}>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
