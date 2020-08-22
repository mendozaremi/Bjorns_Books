import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <header className="nav_container">
      <h4 className="nav_logo">Björn's Books</h4>
      <ul className="nav_links">
        <li>
          <a href="#">Catalogue</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
      <div></div>
    </header>
  );
}

export default Nav;
