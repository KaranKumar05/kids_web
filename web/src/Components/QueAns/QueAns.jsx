import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function QueAns() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="Q/AContainer">
      <h3>Question & Answers</h3>
    </div>
  );
}

export default QueAns;
