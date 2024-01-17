import React, { useEffect } from "react";
import "./subtitle.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Subtitle({ subtitle }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="subtitleContainer" data-aos="fade-right">
      <h3>{subtitle}</h3>
    </div>
  );
}

export default Subtitle;
