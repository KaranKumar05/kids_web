import React from "react";

import "./games.css";

import FlappyBird from "../Assets/Flappy_Bird_banner.png";

import SectionTitle from "../SectionTitle/sectionTitle";

function Games() {
  return (
    <div className="gameContainer" id="games">
      <SectionTitle title="Games" />
      <div className="games">
        <div>
          <img src={FlappyBird} />
          <h3>Flappy Bird</h3>
          <a href="#">Play</a>
        </div>
        <div>
          <img src={FlappyBird} />
          <h3>Flappy Bird</h3>
          <a href="#">Play</a>
        </div>
        <div>
          <img src={FlappyBird} />
          <h3>Flappy Bird</h3>
          <a href="#">Play</a>
        </div>
      </div>
    </div>
  );
}

export default Games;
