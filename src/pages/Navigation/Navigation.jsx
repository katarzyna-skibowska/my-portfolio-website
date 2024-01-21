import { useState } from "react";
import "./Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="navBox">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "navMenu active" : "navMenu"}>
          <li>
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navLink"
              onClick={closeMenu}
            >
              About me
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navLink"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navLink"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className="navLink"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
