import React, { useEffect } from "react";

import "./sectionTitle.css";

import AOS from "aos";
import "aos/dist/aos.css";

function SectionTitle({ title }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="sectionTitleContainer" data-aos="fade-right">
      <h1>{title}</h1>
    </div>
  );
}

export default SectionTitle;
