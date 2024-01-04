import React, { useEffect } from "react";
import "./textToSpeech.css";

import AOS from "aos";
import "aos/dist/aos.css";

import urduAlphabetSpeech from "./urduAlphabetSpeech.mp4";

import SectionTitle from "../SectionTitle/sectionTitle";

const SpeechButton = ({ content }) => {
  const speak = () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(content);
    speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={speak} className="button">
      {content}
    </button>
  );
};

const TextToSpeech = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="textToSpeechContainer">
      <SectionTitle title="Alphabets/Numbers" />
      <div className="content">
        <h3 data-aos="fade-up">English Alphabets</h3>
        <div data-aos="fade-up">
          {letters.map((letter, index) => (
            <SpeechButton key={index} content={letter} />
          ))}
        </div>

        <h3 data-aos="fade-up">Numbers</h3>
        <div data-aos="fade-up">
          {numbers.map((number, index) => (
            <SpeechButton key={index} content={number} />
          ))}
        </div>
        <h3 data-aos="fade-up">Urdu Alphabets</h3>
        <div data-aos="fade-up">
          <video src={urduAlphabetSpeech} controls></video>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
