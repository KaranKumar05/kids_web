import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="navbar">
      <h3>LOGO</h3>
      <nav ref={navRef}>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink to="urduPoem" smooth={true} duration={500}>
              Urdu Poem
            </ScrollLink>
            <ScrollLink to="englishPoem" smooth={true} duration={500}>
              English Poem
            </ScrollLink>
            <ScrollLink to="games" smooth={true} duration={500}>
              Games
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
