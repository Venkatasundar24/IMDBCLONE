import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/actors">Actors</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/producers">Producers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;