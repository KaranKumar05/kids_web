import React from "react";

import { FaRegArrowAltCircleUp } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";

import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div>
        <span>
          <h1>Learning</h1>
          <p>
            "Learning is the fuel that ignites the flame of endless
            possibilities; with each new piece of knowledge, we illuminate the
            path to a brighter and more enlightened future."
          </p>
        </span>
        <span>
          <h1>Education</h1>
          <p>
            "Education is the key that unlocks the doors of opportunity,
            empowering minds to explore, innovate, and create a world where
            every individual has the chance to unfold their full potential."
          </p>
        </span>
      </div>
      <div>
        <ScrollLink to="navbar" smooth={true} duration={500}>
          Back to Top <FaRegArrowAltCircleUp />
        </ScrollLink>
      </div>
    </div>
  );
}

export default Footer;
