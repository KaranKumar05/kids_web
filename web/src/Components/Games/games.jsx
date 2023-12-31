import React, { useEffect } from "react";

import "./games.css";

import FlappyBird from "../Assets/Flappy_Bird_banner.png";
import PaintApp from "../Assets/Paint_App.png";
import TikTakToe from "../Assets/Tik_Tak_Toe.jpg";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

function Games() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="gameContainer" id="games">
      <SectionTitle title="Games" />
      <div className="games">
        <div data-aos="fade-up">
          <img src={FlappyBird} />
          <h3>Flappy Bird</h3>
          <a href="https://karankumar05.github.io/flappy-bird/" target="_blank">
            Play
          </a>
        </div>
        <div data-aos="fade-up">
          <img src={PaintApp} />
          <h3>Paint App</h3>
          <a
            href="https://karankumar05.github.io/Painting_App/"
            target="_blank"
          >
            Play
          </a>
        </div>
        <div data-aos="fade-up">
          <img src={TikTakToe} />
          <h3>Tik Tak Toe</h3>
          <a href="https://karankumar05.github.io/tic_tac_tio/" target="_blank">
            Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Games;
