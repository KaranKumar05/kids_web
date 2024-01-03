import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import { Link as ScrollLink } from "react-scroll";

import Logo from "../Assets/Logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const closeNav = () => {
    showNavbar();
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <header id="navbar">
      <img data-aos="fade-down" src={Logo} alt="Logo" />
      <nav ref={navRef}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="urduPoem"
          smooth={true}
          duration={600}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Urdu Poem
        </ScrollLink>
        <ScrollLink
          to="englishPoem"
          smooth={true}
          duration={700}
          onClick={closeNav}
          data-aos="fade-down"
        >
          English Poem
        </ScrollLink>
        <ScrollLink
          to="games"
          smooth={true}
          duration={800}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Games
        </ScrollLink>
        <ScrollLink
          to="textToSpeechContainer"
          smooth={true}
          duration={900}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Text To Speak
        </ScrollLink>
        <ScrollLink
          to="QAContainer"
          smooth={true}
          duration={900}
          onClick={closeNav}
          data-aos="fade-down"
        >
          GK
        </ScrollLink>


        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar} data-aos="fade-down">
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
