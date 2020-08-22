import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero_container">
      <div className="hero_image_container">
        <img
          className="hero_image"
          src="https://i.imgur.com/KBPsiYF.jpg"
          alt="Björn img"
        />
      </div>
      <div className="hero_bio">
        <h2>Hey I'm Björn, the viking baby warrior from Maine.</h2>
        <p>
          This website is to show you great kid's books and my persoanl
          favorites! My uncle Remi designed this website to show off some of the
          awesome books I wish I had.
        </p>
      </div>
    </div>
  );
}

export default Hero;
