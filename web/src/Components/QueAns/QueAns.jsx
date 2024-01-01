import React, { useEffect, useState } from "react";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

import "./QueAns.css";

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
      question: "پانچ وقت کی نمازوں کا کیا نام ہے؟",
      answer: "فجر، ظہر، عصر، مغرب اور عشاء۔",
    },
    {
      question: "کونسا مہینہ قرآن کا مہینہ ہے؟",
      answer: 'قرآن کا مہینہ "رمضان" ہے۔',
    },
    {
      question: "قرآن کتاب کو کس نبی پر نازل ہوا؟",
      answer: "قرآن کتاب نبی محمد صلی اللہ علیہ و آلہ وسلم پر نازل ہوا۔",
    },
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
          <div key={index} data-aos="fade-up">
            <h2 className="queHeading">Question {index + 1}</h2>
            <p className="question">{qa.question}</p>

            <button onClick={() => toggleAnswer(index)}>
              {showAnswers[index] ? "Answer" : "Answer"}
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
