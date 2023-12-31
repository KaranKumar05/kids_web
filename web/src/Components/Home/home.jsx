import React, { useEffect } from "react";

import "./home.css";

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
        <div className="homeText"  data-aos="fade-up">
          <h1  data-aos="fade-up">
            Free and <span>Fun education</span> for all
            <span> children worldwide</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
