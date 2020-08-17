import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsclNX7hVP2_PZmIoMav7sKtXPN32t-mrQzA&usqp=CAU"
        alt="book"
      />
      <button className="nav_browser">Browse</button>
      <button className="nav_bestsellers">Best Sellers</button>
      <img
        className="nav_account"
        src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        alt="account"
      />
      <img
        className="nav_cart"
        src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Shopping-Cart-PNG.png"
        alt="cart"
      />
    </div>
  );
}

export default Nav;
