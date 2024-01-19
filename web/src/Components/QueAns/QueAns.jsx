import React, { useEffect, useState } from "react";
import "./QueAns.css";

import SectionTitle from "../SectionTitle/sectionTitle";
import Subtitle from "../SectionSubTitle/subtitle";

import { RxSpeakerLoud } from "react-icons/rx";

import AOS from "aos";
import "aos/dist/aos.css";

// ISLAMIAT Q/A
import Que1 from "./IslamQA/Que01.mp3";
import Que2 from "./IslamQA/Que02.mp3";
import Que3 from "./IslamQA/Que03.mp3";
import Que4 from "./IslamQA/Que04.mp3";
import Que5 from "./IslamQA/Que05.mp3";
import Que6 from "./IslamQA/Que06.mp3";
import Que7 from "./IslamQA/Que07.mp3";
import Que8 from "./IslamQA/Que08.mp3";
import Que9 from "./IslamQA/Que09.mp3";
import Que10 from "./IslamQA/Que10.mp3";
import Que11 from "./IslamQA/Que11.mp3";
import Que12 from "./IslamQA/Que12.mp3";

import Ans01 from "./IslamQA/Ans01.mp3";
import Ans02 from "./IslamQA/Ans02.mp3";
import Ans03 from "./IslamQA/Ans03.mp3";
import Ans04 from "./IslamQA/Ans04.mp3";
import Ans05 from "./IslamQA/Ans05.mp3";
import Ans06 from "./IslamQA/Ans06.mp3";
import Ans07 from "./IslamQA/Ans07.mp3";
import Ans08 from "./IslamQA/Ans08.mp3";
import Ans09 from "./IslamQA/Ans09.mp3";
import Ans10 from "./IslamQA/Ans10.mp3";
import Ans11 from "./IslamQA/Ans11.mp3";
import Ans12 from "./IslamQA/Ans12.mp3";

// GENERAL QA
import GkQue1 from "./GeneralQA/Que01.mp3";
import GkAns1 from "./GeneralQA/Ans01.mp3";
import GkQue2 from "./GeneralQA/Que02.mp3";
import GkAns2 from "./GeneralQA/Ans02.mp3";
import GkQue3 from "./GeneralQA/Que03.mp3";
import GkAns3 from "./GeneralQA/Ans03.mp3";
import GkQue4 from "./GeneralQA/Que04.mp3";
import GkAns4 from "./GeneralQA/Ans04.mp3";
import GkQue5 from "./GeneralQA/Que05.mp3";
import GkAns5 from "./GeneralQA/Ans05.mp3";
import GkQue6 from "./GeneralQA/Que06.mp3";
import GkAns6 from "./GeneralQA/Ans06.mp3";
import GkQue7 from "./GeneralQA/Que07.mp3";
import GkAns7 from "./GeneralQA/Ans07.mp3";

function QueAns() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [islamiatAudioQue1] = useState(new Audio(Que1));
  const [islamiatAudioQue2] = useState(new Audio(Que2));
  const [islamiatAudioQue3] = useState(new Audio(Que3));
  const [islamiatAudioQue4] = useState(new Audio(Que4));
  const [islamiatAudioQue5] = useState(new Audio(Que5));
  const [islamiatAudioQue6] = useState(new Audio(Que6));
  const [islamiatAudioQue7] = useState(new Audio(Que7));
  const [islamiatAudioQue8] = useState(new Audio(Que8));
  const [islamiatAudioQue9] = useState(new Audio(Que9));
  const [islamiatAudioQue10] = useState(new Audio(Que10));
  const [islamiatAudioQue11] = useState(new Audio(Que11));
  const [islamiatAudioQue12] = useState(new Audio(Que12));

  const [islamiatAudioAns01] = useState(new Audio(Ans01));
  const [islamiatAudioAns02] = useState(new Audio(Ans02));
  const [islamiatAudioAns03] = useState(new Audio(Ans03));
  const [islamiatAudioAns04] = useState(new Audio(Ans04));
  const [islamiatAudioAns05] = useState(new Audio(Ans05));
  const [islamiatAudioAns06] = useState(new Audio(Ans06));
  const [islamiatAudioAns07] = useState(new Audio(Ans07));
  const [islamiatAudioAns08] = useState(new Audio(Ans08));
  const [islamiatAudioAns09] = useState(new Audio(Ans09));
  const [islamiatAudioAns10] = useState(new Audio(Ans10));
  const [islamiatAudioAns11] = useState(new Audio(Ans11));
  const [islamiatAudioAns12] = useState(new Audio(Ans12));

  const [GkAudioQue01] = useState(new Audio(GkQue1));
  const [GkAudioAns01] = useState(new Audio(GkAns1));
  const [GkAudioQue02] = useState(new Audio(GkQue2));
  const [GkAudioAns02] = useState(new Audio(GkAns2));
  const [GkAudioQue03] = useState(new Audio(GkQue3));
  const [GkAudioAns03] = useState(new Audio(GkAns3));
  const [GkAudioQue04] = useState(new Audio(GkQue4));
  const [GkAudioAns04] = useState(new Audio(GkAns4));
  const [GkAudioQue05] = useState(new Audio(GkQue5));
  const [GkAudioAns05] = useState(new Audio(GkAns5));
  const [GkAudioQue06] = useState(new Audio(GkQue6));
  const [GkAudioAns06] = useState(new Audio(GkAns6));
  const [GkAudioQue07] = useState(new Audio(GkQue7));
  const [GkAudioAns07] = useState(new Audio(GkAns7));

  // ISLAMIAT

  const Que1Sound = () => {
    islamiatAudioQue1.play();
  };
  const Que2Sound = () => {
    islamiatAudioQue2.play();
  };
  const Que3Sound = () => {
    islamiatAudioQue3.play();
  };
  const Que4Sound = () => {
    islamiatAudioQue4.play();
  };
  const Que5Sound = () => {
    islamiatAudioQue5.play();
  };
  const Que6Sound = () => {
    islamiatAudioQue6.play();
  };
  const Que7Sound = () => {
    islamiatAudioQue7.play();
  };
  const Que8Sound = () => {
    islamiatAudioQue8.play();
  };
  const Que9Sound = () => {
    islamiatAudioQue9.play();
  };
  const Que10Sound = () => {
    islamiatAudioQue10.play();
  };
  const Que11Sound = () => {
    islamiatAudioQue11.play();
  };
  const Que12Sound = () => {
    islamiatAudioQue12.play();
  };

  const Ans1Sound = () => {
    islamiatAudioAns01.play();
  };
  const Ans2Sound = () => {
    islamiatAudioAns02.play();
  };
  const Ans3Sound = () => {
    islamiatAudioAns03.play();
  };
  const Ans4Sound = () => {
    islamiatAudioAns04.play();
  };
  const Ans5Sound = () => {
    islamiatAudioAns05.play();
  };
  const Ans6Sound = () => {
    islamiatAudioAns06.play();
  };
  const Ans7Sound = () => {
    islamiatAudioAns07.play();
  };
  const Ans8Sound = () => {
    islamiatAudioAns08.play();
  };
  const Ans9Sound = () => {
    islamiatAudioAns09.play();
  };
  const Ans10Sound = () => {
    islamiatAudioAns10.play();
  };
  const Ans11Sound = () => {
    islamiatAudioAns11.play();
  };
  const Ans12Sound = () => {
    islamiatAudioAns12.play();
  };

  // GENERAL
  const GkQue1Sound = () => {
    GkAudioQue01.play();
  };
  const GkAns1Sound = () => {
    GkAudioAns01.play();
  };
  const GkQue2Sound = () => {
    GkAudioQue02.play();
  };
  const GkAns2Sound = () => {
    GkAudioAns02.play();
  };
  const GkQue3Sound = () => {
    GkAudioQue03.play();
  };
  const GkAns3Sound = () => {
    GkAudioAns03.play();
  };
  const GkQue4Sound = () => {
    GkAudioQue04.play();
  };
  const GkAns4Sound = () => {
    GkAudioAns04.play();
  };
  const GkQue5Sound = () => {
    GkAudioQue05.play();
  };
  const GkAns5Sound = () => {
    GkAudioAns05.play();
  };
  const GkQue6Sound = () => {
    GkAudioQue06.play();
  };
  const GkAns6Sound = () => {
    GkAudioAns06.play();
  };
  const GkQue7Sound = () => {
    GkAudioQue07.play();
  };
  const GkAns7Sound = () => {
    GkAudioAns07.play();
  };

  return (
    <div id="QAContainer">
      <SectionTitle title={"Questions/Answers"} />
      <Subtitle subtitle={"ISLAMIAT"} />
      <div className="QueAnsContainer islamicQA">
        <div data-aos="fade-up">
          <div>
            <button onClick={Que1Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              ہم سب کون ہیں؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans1Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -ہم سب مسلمان ہیں
              <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que2Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              ہمارا دین کیا ہے؟ <span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans2Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -ہمارا دین اسلام ہے<span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que3Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              ہمیں کس نے پیدا کیا؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans3Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -ہمیں اللہ نےپیدا کیا <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que4Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              اللہ کتنے ہیں؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans4Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -اللہ صرف ایک ہے <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que5Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              ہمارے آخری نبی کا نام کیا ہے؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans5Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -ہمارے آخری نبی کا نام حضرت محمد ﷺ ہے
              <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que6Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              آخری نبی حضرت محمد ﷺ کب پیدا ہوے؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans6Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -آخری نبی محمد ﷺ ۱۲ ربیع الاول کو پیدا ہوے <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que7Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              حضرت محمد ﷺ کے والد کا نام کیا تھا؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans7Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -حضرت محمد ﷺ کے والد کا نام حضرت عبد اللہ تھا <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que8Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              حضرت محمد ﷺ کی والدہ کا نام کیا تھا؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans8Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -حضرت محمد ﷺ کی والدہ کا نام حضرت بی بی آمنہ تھا{" "}
              <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que9Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              قرآن مجید کس پر نازل ہوا؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans9Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -قرآن مجید حضرت محمد ﷺ پر نازل ہوا
              <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que10Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              مسلمان سال میں کتنی عیدیں مناتے ہیں؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans10Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -مسلمان سال میں دو عیدیں مناتے ہیں <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que11Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              ہم سب کس کی اولاد ہیں؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans11Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -ہم سب آدم علیہ السلام کی اولاد ہیں <span>:جواب</span>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <button onClick={Que12Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              کوئی بھی کام شروع کرنے سے پہلے کیا پرھنا چاہیے؟<span>:سوال</span>
            </p>
          </div>
          <div>
            <button onClick={Ans12Sound}>
              <RxSpeakerLoud />
            </button>
            <p>
              -کوئی بھی کام شروع کرنے سے پہلے ہمیں بسم الله الرحمن الرحیم پرھنا
              چاہیے <span>:جواب</span>
            </p>
          </div>
        </div>
      </div>

      <Subtitle subtitle={"GENERAL KNOWLEDGE"} />
      <div className="QueAnsContainer generalKnowledgeQA">
        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              Who is the founder of Pakistan?
            </p>
            <button onClick={GkQue1Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              Muhammad Ali Jinnah is the founder of Pakistan-
            </p>
            <button onClick={GkAns1Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              What is the Capital city of Pakistan?
            </p>
            <button onClick={GkQue2Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              Islamabad is the Capital city of Pakistan-
            </p>
            <button onClick={GkAns2Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              What is the Currency of Pakistan?
            </p>
            <button onClick={GkQue3Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              Pakistan Rupee is the Currency of Pakistan-
            </p>
            <button onClick={GkAns3Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              What is the Largest city in Pakistan?
            </p>
            <button onClick={GkQue4Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              Karachi is the Largest city in Pakistan-
            </p>
            <button onClick={GkAns4Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              What is the National Animal of Pakistan?
            </p>
            <button onClick={GkQue5Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              Markhor is the national animal of Pakistan-
            </p>
            <button onClick={GkAns5Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              How many days are there in a week?
            </p>
            <button onClick={GkQue6Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>7 days in a week-
            </p>
            <button onClick={GkAns6Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p>
              <span>Question:</span>
              How many countries are there in the World?
            </p>
            <button onClick={GkQue7Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
          <div>
            <p>
              <span>Answer:</span>
              There are 195 Countries in the world-
            </p>
            <button onClick={GkAns7Sound}>
              <RxSpeakerLoud />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueAns;
