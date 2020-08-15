import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <button className="nav_logo">Logo</button>
      <button>Best Sellers</button>
      <button>Björns Books</button>
      <button>Account</button>
      <button className="nav_cart">Cart</button>
    </div>
  );
}

export default Nav;
