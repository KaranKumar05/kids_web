import fristKalma from "./duaqalma/phala kalma.mp4";
import secondKalma from "./duaqalma/dusra kalma.mp4";
import milkDua from "./duaqalma/milk dua.mp4";
import soneKeDua from "./duaqalma/sona ke dua.mp4";

import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/sectionTitle";

import "./dua.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Dua() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="duaContainer">
      <SectionTitle title="Dua/Kalma" />
      <div className="duaContainer">
        <div data-aos="fade-up">
          <h3>Pehla Kalma-Kalma Tyaba</h3>
          <video src={fristKalma} height={200} width={350} controls preload="none"></video>
        </div>
        <div data-aos="fade-up">
          <h3>Dusra kalma-Kalma Shahadat</h3>
          <video src={secondKalma} height={200} width={350} controls preload="none"></video>
        </div>
      </div>
      <div className="duaContainer">
        <div data-aos="fade-up">
          <h3>Dudh pina ke Dua</h3>
          <video src={milkDua} height={200} width={350} controls preload="none"></video>
        </div>
        <div data-aos="fade-up">
          <h3>Sona ki Dua</h3>
          <video src={soneKeDua} height={200} width={350} controls preload="none"></video>
        </div>
      </div>
    </div>
  );
}

export default Dua;
 