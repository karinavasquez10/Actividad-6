import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/products">PRODUCTOS</Link></li>
        <li><Link to="/cart">TU CARRITO</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;