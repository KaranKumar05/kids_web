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
      question: "ہمارے نبی کا نام کیا ہے؟",
      answer:
        "محمد صلی اللہ علیہ وسلم",
    },
    {
      question: "پہلے نبی کا نام کیا ہے؟",
      answer: "آدم علیہ السلام",
    },
    {
      question: "آخری نبی کا نام کیا ہے؟",
      answer: 'آخری نبی کا نام کیا ہے؟',
    },
    {
      question: "کیا ہمارے نبی پاک صلی اللہ علیہ وسلم کے بعد کوئی نبی ہے؟",
      answer: "نہیں",
    },
    {
      question: "اسلامی کیلنڈر میں کتنے مہینے ہیں؟",
      answer: "12",
    },
    {
      question: "اسلامی کلینڈر کا تیسرا مہینہ کیا ہے؟",
      answer: "ربیع الاول",
    },
    {
      question: "ہمارے پیارے نبی صلی اللہ علیہ وسلم کی تاریخ پیدائش کیا ہے؟",
      answer: "12 ربیع الاول",
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
