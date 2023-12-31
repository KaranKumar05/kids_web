import React, { useEffect, useState } from "react";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

import './QueAns.css'

function QueAns() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const initialQuestions = [
    {
      question: "اللہ کے کتنے نام ہیں؟",
      answer:
        "اللہ کے ۹۹ نام ہیں، جو کہ ہمیں اُس کے مختلف صفات اور خصوصیات بتاتے ہیں۔",
    },
    {
      question: "اللہ کے کتنے نام ہیں؟",
      answer:
        "اللہ کے ۹۹ نام ہیں، جو کہ ہمیں اُس کے مختلف صفات اور خصوصیات بتاتے ہیں۔",
    },
    {
      question: "اللہ کے کتنے نام ہیں؟",
      answer:
        "اللہ کے ۹۹ نام ہیں، جو کہ ہمیں اُس کے مختلف صفات اور خصوصیات بتاتے ہیں۔",
    },
    {
      question: "اللہ کے کتنے نام ہیں؟",
      answer:
        "اللہ کے ۹۹ نام ہیں، جو کہ ہمیں اُس کے مختلف صفات اور خصوصیات بتاتے ہیں۔",
    },
    // Add more questions and answers as needed
  ];
  const [showAnswers, setShowAnswers] = useState(
    Array(initialQuestions.length).fill(false)
  );

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };
  return (
    <div id="QAContainer">
      <SectionTitle title={"Questions/Answers"} />
      <div className="QueAnsContainer">
        {initialQuestions.map((qa, index) => (
          <div key={index}>
            <h2 className="queHeading">Question {index + 1}</h2>
            <p className="question">{qa.question}</p>

            <button onClick={() => toggleAnswer(index)}>
              {showAnswers[index] ? "Hide Answer" : "Show Answer"}
            </button>

            {showAnswers[index] && (
              <div>
                <h2 className="ansHeading">Answer:</h2>
                <p className="answer">{qa.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueAns;
