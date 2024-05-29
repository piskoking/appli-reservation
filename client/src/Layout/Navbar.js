// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Catégories</Link>
        </li>
        <li>
          <Link to="/Réservations"> Réservations</Link>
        </li>
        <li>
          <Link to="/MyAccount"> MyAccount</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
