import React, { useEffect } from "react";

import "./Upoem.css";

import SectionTitle from "../SectionTitle/sectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

function UrduPoem() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="urduPoemContainer" id="urduPoem">
      <SectionTitle title="Urdu Poem" />
      <div className="urduPoems">
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
        <div data-aos="fade-up"></div>
      </div>
    </div>
  );
}

export default UrduPoem;
