import React, { useEffect } from "react";

import "./home.css";

import BannerPic from '../Assets/bannerPic.png'

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="homeContainer" id="home">
        <div className="banner"></div>
        <div className="homeText" data-aos="fade-up">
          <h1 data-aos="fade-up">
            Welcome
            <span>Free and Fun education for all children worldwide</span>
          </h1>
          <img src={BannerPic}  width={350} height={400}/>
        </div>
      </div>
    </>
  );
}

export default Home;
