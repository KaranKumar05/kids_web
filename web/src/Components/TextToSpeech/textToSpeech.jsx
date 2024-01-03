import React from "react";

import "./textToSpeech.css";

import SectionTitle from "../SectionTitle/sectionTitle";


function TextToSpeech() {
  // const handleSpeak = () => {
  //   const text = "آپ کیسے ہو";
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   // utterance.lang = "en-US"; // Set language code (e.g., 'en-US' for English, 'ur-PK' for Urdu)
  //   utterance.lang = "ur-PK"; // Set language code (e.g., 'en-US' for English, 'ur-PK' for Urdu)

  //   window.speechSynthesis.speak(utterance);
  // };
  return (
    <div id="textToSpeechContainer">
      <SectionTitle title="Text to Speech" />
      <div className="textToSpeech">
      </div>
    </div>
  );
}

export default TextToSpeech;
