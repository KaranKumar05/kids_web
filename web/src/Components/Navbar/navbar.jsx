import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import { Link as ScrollLink } from "react-scroll";

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

  useEffect (()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <header id="navbar">
      <h3 data-aos="fade-down">LOGO</h3>
      <nav ref={navRef}>
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeNav} data-aos="fade-down">
          Home
        </ScrollLink>
        <ScrollLink
          to="urduPoem"
          smooth={true}
          duration={600}
          onClick={closeNav} data-aos="fade-down"
        >
          Urdu Poem
        </ScrollLink>
        <ScrollLink
          to="englishPoem"
          smooth={true}
          duration={700}
          onClick={closeNav} data-aos="fade-down"
        >
          English Poem
        </ScrollLink>
        <ScrollLink to="games" smooth={true} duration={800} onClick={closeNav} data-aos="fade-down">
          Games
        </ScrollLink>
        <ScrollLink
          to="QAContainer"
          smooth={true}
          duration={900}
          onClick={closeNav} data-aos="fade-down"
        >
          Q/A
        </ScrollLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
