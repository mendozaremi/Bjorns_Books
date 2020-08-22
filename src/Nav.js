import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <header className="nav_container">
      <h5 className="nav_logo">Björn's Books</h5>
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
      <button>
        <img
          className="nav_account"
          src="https://i7.pngguru.com/preview/393/995/701/aspria-fitness-computer-icons-user-clip-art-my-account-icon-thumbnail.jpg"
          alt="profile"
        />
      </button>
    </header>
  );
}

export default Nav;
