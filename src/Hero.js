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
        <h1>HI I'M BJÖRN</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Hero;
