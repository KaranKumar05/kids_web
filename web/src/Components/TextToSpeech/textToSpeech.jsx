import React, { useEffect, useState } from "react";
import "./textToSpeech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import urduAlphabetSpeech from "./urduAlphabetSpeech.mp4";
import ABCD from "./ABCD.mp4";
import SectionTitle from "../SectionTitle/sectionTitle";

// Udru Sound
import alif from "./urduAudio/1.mp3";
import ba from "./urduAudio/2.mp3";
import pa from "./urduAudio/3.mp3";
import ta from "./urduAudio/4.mp3";
import te from "./urduAudio/07 Te.mp3";
import se from "./urduAudio/08 se.mp3";
import jeem from "./urduAudio/09 jeem.mp3";
import che from "./urduAudio/10 che.mp3";
import bareeHe from "./urduAudio/11 baree he.mp3";
import khe from "./urduAudio/12 khe.mp3";
import daal from "./urduAudio/13 daal.mp3";
import zaal from "./urduAudio/15 zaal.mp3";
import re from "./urduAudio/16 re.mp3";
import zhe from "./urduAudio/19 zhe.mp3";
import seen from "./urduAudio/20 seen.mp3";
import sheen from "./urduAudio/21 sheen.mp3";
import svaad from "./urduAudio/22 svaad.mp3";
import zaad from "./urduAudio/23 zaad.mp3";
import toy from "./urduAudio/24 toy.mp3";
import zoy from "./urduAudio/25 zoy.mp3";
import ain from "./urduAudio/26 ain.mp3";
import gain from "./urduAudio/27 gain.mp3";
import fe from "./urduAudio/28 fe.mp3";
import qaaf from "./urduAudio/29 qaaf.mp3";
import kaaf from "./urduAudio/30 kaaf.mp3";
import gaaf from "./urduAudio/31 gaaf.mp3";
import laam from "./urduAudio/32 laam.mp3";
import meem from "./urduAudio/33 meem.mp3";
import noon from "./urduAudio/34 noon.mp3";
import vaao from "./urduAudio/35 vaao.mp3";
import choteehe from "./urduAudio/36 chotee he.mp3";
import ye from "./urduAudio/37 ye.mp3";
import bhareeye from "./urduAudio/38 baree ye.mp3";

// Numbers Sound
import one from "./numbers/1.MP3";
import two from "./numbers/2.MP3";
import three from "./numbers/3.MP3";
import four from "./numbers/4.MP3";
import five from "./numbers/5.MP3";
import six from "./numbers/6.MP3";
import seven from "./numbers/7.MP3";
import eight from "./numbers/8.MP3";
import nine from "./numbers/9.MP3";
import ten from "./numbers/10.MP3";

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

  // Urdu Sound State 
  const [urduAudio] = useState(new Audio(alif));
  const [urduAudio1] = useState(new Audio(ba));
  const [urduAudio2] = useState(new Audio(pa));
  const [urduAudio3] = useState(new Audio(ta));
  const [urduAudio4] = useState(new Audio(te));
  const [urduAudio5] = useState(new Audio(se));
  const [urduAudio6] = useState(new Audio(jeem));
  const [urduAudio7] = useState(new Audio(che));
  const [urduAudio8] = useState(new Audio(bareeHe));
  const [urduAudio9] = useState(new Audio(khe));
  const [urduAudio10] = useState(new Audio(daal));
  const [urduAudio11] = useState(new Audio(zaal));
  const [urduAudio12] = useState(new Audio(re));
  const [urduAudio13] = useState(new Audio(zhe));
  const [urduAudio14] = useState(new Audio(seen));
  const [urduAudio15] = useState(new Audio(sheen));
  const [urduAudio16] = useState(new Audio(svaad));
  const [urduAudio17] = useState(new Audio(zaad));
  const [urduAudio18] = useState(new Audio(toy));
  const [urduAudio19] = useState(new Audio(zoy));
  const [urduAudio20] = useState(new Audio(ain));
  const [urduAudio21] = useState(new Audio(gain));
  const [urduAudio22] = useState(new Audio(fe));
  const [urduAudio23] = useState(new Audio(qaaf));
  const [urduAudio24] = useState(new Audio(kaaf));
  const [urduAudio25] = useState(new Audio(gaaf));
  const [urduAudio26] = useState(new Audio(laam));
  const [urduAudio27] = useState(new Audio(meem));
  const [urduAudio28] = useState(new Audio(noon));
  const [urduAudio29] = useState(new Audio(vaao));
  const [urduAudio30] = useState(new Audio(choteehe));
  const [urduAudio31] = useState(new Audio(ye));
  const [urduAudio32] = useState(new Audio(bhareeye));

  const alifSound = () => {
    urduAudio.play();
  }
  const baSound = () => {
    urduAudio1.play();
  }
  const paSound = () => {
    urduAudio2.play();
  }
  const taSound = () => {
    urduAudio3.play();
  }
  const teSound = () => {
    urduAudio4.play();
  }
  const seSound = () => {
    urduAudio5.play();
  }
  const jeemSound = () => {
    urduAudio6.play();
  }
  const cheSound = () => {
    urduAudio7.play();
  }
  const bareeHeSound = () => {
    urduAudio8.play();
  }
  const kheSound = () => {
    urduAudio9.play();
  }
  const daalSound = () => {
    urduAudio10.play();
  }
  const zaalSound = () => {
    urduAudio11.play();
  }
  const reSound = () => {
    urduAudio12.play();
  }
  const zheSound = () => {
    urduAudio13.play();
  }
  const seenSound = () => {
    urduAudio14.play();
  }
  const sheenSound = () => {
    urduAudio15.play();
  }
  const svaadSound = () => {
    urduAudio16.play();
  }
  const zaadSound = () => {
    urduAudio17.play();
  }
  const toySound = () => {
    urduAudio18.play();
  }
  const zoySound = () => {
    urduAudio19.play();
  }
  const ainSound = () => {
    urduAudio20.play();
  }
  const gainSound = () => {
    urduAudio21.play();
  }
  const feSound = () => {
    urduAudio22.play();
  }
  const qaafSound = () => {
    urduAudio23.play();
  }
  const kaafSound = () => {
    urduAudio24.play();
  }
  const gaafSound = () => {
    urduAudio25.play();
  }
  const laamSound = () => {
    urduAudio26.play();
  }
  const meemSound = () => {
    urduAudio27.play();
  }
  const noonSound = () => {
    urduAudio28.play();
  }
  const vaaoSound = () => {
    urduAudio29.play();
  }
  const choteeheSound = () => {
    urduAudio30.play();
  }
  const yeSound = () => {
    urduAudio31.play();
  }
  const bhareeyeSound = () => {
    urduAudio32.play();
  }

  // Number Sound State 
  const [audio] = useState(new Audio(one));
  const [audio1] = useState(new Audio(two));
  const [audio2] = useState(new Audio(three));
  const [audio3] = useState(new Audio(four));
  const [audio4] = useState(new Audio(five));
  const [audio5] = useState(new Audio(six));
  const [audio6] = useState(new Audio(seven));
  const [audio7] = useState(new Audio(eight));
  const [audio8] = useState(new Audio(nine));
  const [audio9] = useState(new Audio(ten));

  const numberOne = () => {
    audio.play();
  };
  const numberTwo = () => {
    audio1.play();
  };
  const numberThree = () => {
    audio2.play();
  };
  const numberFour = () => {
    audio3.play();
  };
  const numberFive = () => {
    audio4.play();
  };
  const numberSix = () => {
    audio5.play();
  };
  const numberSeven = () => {
    audio6.play();
  };
  const numberEight = () => {
    audio7.play();
  };
  const numberNine = () => {
    audio8.play();
  };
  const numberTen = () => {
    audio9.play();
  };

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="textToSpeechContainer">
      <SectionTitle title="Alphabets/Numbers" />
      <div className="content">
        <h3 data-aos="fade-up">English Alphabets</h3>
        <div data-aos="fade-up">
          <div data-aos="fade-up">
            {letters.map((letter, index) => (
              <SpeechButton key={index} content={letter} />
            ))}
          </div>
          <video src={ABCD} controls></video>
        </div>
        <h3 data-aos="fade-up">Urdu Alphabets</h3>
        <div data-aos="fade-up">
          <div className="urduAlphabets">
            <button onClick={alifSound}>ا</button>
            <button onClick={baSound}>ب</button>
            <button onClick={paSound}>پ</button>
            <button onClick={taSound}>ت</button>
            <button onClick={teSound}>ٹ</button>
            <button onClick={seSound}>ث</button>
            <button onClick={jeemSound}>ج</button>
            <button onClick={cheSound}>چ</button>
            {/* <button onClick={}>ح</button> */}
            <button onClick={kheSound}>خ</button>
            <button onClick={daalSound}>د</button>
            {/* <button onClick={}>ڈ</button> */}
            <button onClick={zaalSound}>ذ</button>
            <button onClick={reSound}>ر</button>
            {/* <button onClick={}>ڑ</button> */}
            {/* <button onClick={}>ز</button> */}
            {/* <button onClick={}>ژ</button> */}
            <button onClick={seenSound}>س</button>
            <button onClick={sheenSound}>ش</button>
            <button onClick={svaadSound}>ص</button>
            <button onClick={zaadSound}>ض</button>
            <button onClick={toySound}>ط</button>
            <button onClick={zoySound}>ظ</button>
            <button onClick={ainSound}>ع</button>
            <button onClick={gainSound}>غ</button>
            <button onClick={feSound}>ف</button>
            <button onClick={qaafSound}>ق</button>
            <button onClick={kaafSound}>ک</button>
            <button onClick={gaafSound}>گ</button>
            <button onClick={laamSound}>ل</button>
            <button onClick={meemSound}>م</button>
            <button onClick={noonSound}>ن</button>
            <button onClick={vaaoSound}>و</button>
            <button onClick={choteeheSound}>ہ</button>
            <button onClick={bhareeyeSound}>ی</button>
            <button onClick={yeSound}>ے</button>
          </div>
          <video src={urduAlphabetSpeech} controls></video>
        </div>
        <h3 data-aos="fade-up">Numbers</h3>
        <div>
          <button onClick={numberOne}>1</button>
          <button onClick={numberTwo}>2</button>
          <button onClick={numberThree}>3</button>
          <button onClick={numberFour}>4</button>
          <button onClick={numberFive}>5</button>
          <button onClick={numberSix}>6</button>
          <button onClick={numberSeven}>7</button>
          <button onClick={numberEight}>8</button>
          <button onClick={numberNine}>9</button>
          <button onClick={numberTen}>10</button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
