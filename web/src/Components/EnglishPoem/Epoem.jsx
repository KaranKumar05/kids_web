import React, { useEffect } from "react";

import "./Epoem.css";

import BabaBlackSheep from "../Assets/Poems/EnglishPoems/Baba_black_sheep.mp4";
import BabyShark from "../Assets/Poems/EnglishPoems/Baby_Shark.mp4";
import PeeKaBoo from "../Assets/Poems/EnglishPoems/Pee_ka_boo.mp4";
import TwinkleStar from "../Assets/Poems/EnglishPoems/Twinkle_Little_Star.mp4";
import WheelsOnTheBus from "../Assets/Poems/EnglishPoems/Wheels_on_the_bus.mp4";
import JohnnyJohnny from "../Assets/Poems/EnglishPoems/Johnny_johnny.mp4";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

function EnglishPoem() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="englishPoemContainer" id="englishPoem">
      <SectionTitle title="English Poem" />
      <div className="englishPoems">
        <div data-aos="fade-up">
          <h3>Baba Black Sheep</h3>
          <video src={BabaBlackSheep} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Baby Shark</h3>
          <video src={BabyShark} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Twinkle Twinkle Little Star</h3>
          <video src={TwinkleStar} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Wheels on the bus go Round a</h3>
          <video src={WheelsOnTheBus} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Pee ka Boo</h3>
          <video src={PeeKaBoo} height={200} width={350} controls></video>
        </div>
        <div data-aos="fade-up">
          <h3>Johnny Johnny yes papa</h3>
          <video src={JohnnyJohnny} height={200} width={350} controls></video>
        </div>
      </div>
    </div>
  );
}

export default EnglishPoem;
