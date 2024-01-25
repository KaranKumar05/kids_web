import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import { Link as ScrollLink } from "react-scroll";

import Logo from "../Assets/Logo.png";

import AOS from "aos";  
import "aos/dist/aos.css";
import CountdownApp from "../CountDown/countDown";

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
          Poems
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
          Alphabets/Numbers
        </ScrollLink>
        <ScrollLink
          to="duaContainer"
          smooth={true}
          duration={900}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Dua/Qulma
        </ScrollLink>
        <ScrollLink
          to="QAContainer"
          smooth={true}
          duration={900}
          onClick={closeNav}
          data-aos="fade-down"
        >
          Q/A
        </ScrollLink>
        <ScrollLink data-aos="fade-down">
          <CountdownApp />
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
