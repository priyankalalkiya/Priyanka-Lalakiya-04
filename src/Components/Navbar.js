import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../Images/1logo.jpg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav className={`sticky-nav ${clicked ? "active" : ""}`}>
      <div className="logo-container">
        <img className="circle" src={logo} alt="My Logo" />
        <h2 className="nav-title">Web Developer</h2>
      </div>
      <div>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
            <Link
              className="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={handleSetActive}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onSetActive={handleSetActive}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onSetActive={handleSetActive}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
