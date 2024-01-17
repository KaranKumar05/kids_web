import React, { useEffect, useState } from "react";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

import "./QueAns.css";
import Subtitle from "../SectionSubTitle/subtitle";

function QueAns() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const islamicQuestions = [
    {
      question: "ہم سب کون ہیں؟",
      answer: "ہم مسلمان ہیں",
    },
    {
      question: "ہمارا دین کیا ہے؟",
      answer: "ہمارا دین اسلام ہے۔",
    },
    {
      question: "ہمیں کس نے پیدا کیا؟",
      answer: "اللہ نے ہمیں پیدا کیا۔",
    },
    {
      question: "کتنے اللہ ہیں؟",
      answer: "صرف ایک اللہ ہے۔",
    },
    {
      question: "ہمارے آخری نبی کا نام کیا ہے؟",
      answer: "آخری نبی کا نام ہضمت محمد صلی اللہ علیہ وآلہ وسلم ہے۔",
    },
    {
      question: "آخری نبی حضرت محمد صلی اللہ علیہ وآلہ وسلم کا ولادت؟",
      answer:
        "آخری نبی حضرت محمد صلی اللہ علیہ وآلہ وسلم کی ولادت 12 ربیع الأول کو ہوئی تھی۔",
    },
    {
      question: "حضرت محمد صلی اللہ علیہ وآلہ وسلم کے والد کا نام کیا تھا؟",
      answer:
        "آخری نبی حضرت محمد صلی اللہ علیہ وآلہ وسلم کے والد کا نام حضرت عبداللہ تھا۔",
    },
    {
      question: "حضرت محمد صلی اللہ علیہ وآلہ وسلم کی والدہ کا نام کیا تھا؟",
      answer:
        "حضرت محمد صلی اللہ علیہ وآلہ وسلم کی والدہ کا نام حضرت بی بی آمنہ تھا۔",
    },
    {
      question: "قرآن مجید کس پر نازل ہوئی؟",
      answer: "قرآن مجید حضرت محمد صلی اللہ علیہ وآلہ وسلم پر نازل ہوئی۔",
    },
    {
      question: "مسلمان ہاج کرنا کہاں جاتا ہے؟",
      answer: "مسلمان حاج کرنا مکہ مکرمہ جاتا ہے۔",
    },
    {
      question: "مسلمان سال میں کتنی عیدیں مناتا ہے؟",
      answer: "مسلمان سال میں دو عیدیں مناتا ہے۔",
    },
    {
      question: "مسلمان دن میں کتنی نمازیں پڑھتا ہے؟",
      answer: "مسلمان دن میں پانچ نمازیں پڑھتا ہے۔",
    },
    {
      question: "ہم سب کس کے اولاد ہیں؟",
      answer: "ہم سب آدم علیہ السلام کے اولاد ہیں۔",
    },
    {
      question: "اسلام کا کتنے ارکان ہیں؟",
      answer: "اسلام کے پانچ ارکان ہیں۔",
    },
    {
      question: "اسلام میں کتنے کلمہ ہے؟",
      answer: "اسلام میں چھ کلمہ ہیں۔",
    },
    {
      question: "کوئی بھی کام شروع کرنے سے پہلے کیا پڑھنا چاہئے؟",
      answer: 'کوئی بھی کام شروع کرنے سے پہلے "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ" پڑھنا چاہیے۔',
    },
  ];
  const generalKnowledgeQuestions = [
    {
      question: "Who is the founder of Pakistan?",
      answer: "Muhammad Ali Jinnah is the founder of Pakistan",
    },
    {
      question: "What is the capital of Pakistan?",
      answer: "Islamabad is the capital city of Pakistan",
    },
    {
      question: "What is the currency of Pakistan?",
      answer: "Pakistani Rupees",
    },
    {
      question: "What is the largest city in Pakistan?",
      answer: "Karachi is the largest city in Pakistan",
    },
    {
      question: "What is the largest state in Pakistan?",
      answer: "Balochistan is the largest state in Pakistan",
    },
    {
      question: "What is the national animal of Pakistan?",
      answer: "Markhor is the national animal of pakistan",
    },
    {
      question: "How many countries are there in the world",
      answer: "There are 195 countries in the world",
    },
    {
      question: "How many days are there in a week?",
      answer: "7 days  in a week",
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: "The largest ocean is the Pacific Ocean",
    },
  ];
  const [showAnswers, setShowAnswers] = useState(
    Array(islamicQuestions.length).fill(false)
  );

  const [showAnswersGK, setShowAnswersGK] = useState(
    Array(generalKnowledgeQuestions.length).fill(false)
  );

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);

    const newShowAnswersGK = [...showAnswersGK];
    newShowAnswersGK[index] = !newShowAnswersGK[index];
    setShowAnswersGK(newShowAnswersGK);
  };
  return (
    <div id="QAContainer">
      <SectionTitle title={"Questions/Answers"} />
      <Subtitle subtitle={"ISLAMIAT"} />
      <div className="QueAnsContainer islamicQA">
        {islamicQuestions.map((qa, index) => (
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

      <Subtitle subtitle={"GERENAL KNOWLEDGE"} />
      <div className="QueAnsContainer generalKnowledgeQA">
        {generalKnowledgeQuestions.map((qa, index) => (
          <div key={index} data-aos="fade-up">
            <h2 className="queHeading">Question {index + 1}</h2>
            <p className="question">{qa.question}</p>

            <button onClick={() => toggleAnswer(index)}>
              {showAnswersGK[index] ? "Answer" : "Answer"}
            </button>

            {showAnswersGK[index] && (
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
