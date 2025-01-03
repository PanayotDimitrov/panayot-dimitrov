import React, { useState, useEffect, useRef } from "react";
import "../nav/nav.css";
import linkedin from "../../../pictures/linkedin.png";
import github from "../../../pictures/github.png";
import logo from "../../../pictures/logo.jpg";

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const navCenterRef = useRef(null);
  const navRightRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const checkOverflow = () => {
    const navCenter = navCenterRef.current;
    const navRight = navRightRef.current;
    if (navCenter && navRight) {
      const navWrapperWidth = navCenter.parentElement.offsetWidth;
      const navCenterWidth = navCenter.offsetWidth;
      const navRightWidth = navRight.offsetWidth;
      setIsDropdown(navCenterWidth + navRightWidth > navWrapperWidth || window.innerWidth < 1300);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkOverflow);
    checkOverflow();
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-left">
          <img src={logo} alt="Logo" />
          <h1>Panayot Dimitrov</h1>
        </div>
        <div className="nav-center" ref={navCenterRef}>
          {!isDropdown ? (
            <>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </>
          ) : null}
        </div>
        <div className="nav-right" ref={navRightRef}>
          {!isDropdown && (
            <>
              <a href="https://github.com/PanayotDimitrov">
                <img src={github} alt="github" height={50} />
              </a>
              <a href="https://www.linkedin.com/in/panayot-dimitrov-175442295/">
                <img src={linkedin} alt="linkedin" height={50} />
              </a>
            </>
          )}
          {isDropdown && (
            <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </nav>
      {isDropdown && (
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeDropdown}>About</a>
          <a href="#skills" onClick={closeDropdown}>Skills</a>
          <a href="#projects" onClick={closeDropdown}>Projects</a>
          <a href="#contact" onClick={closeDropdown}>Contact</a>
          <a href="https://github.com/PanayotDimitrov" onClick={closeDropdown}>
            <img src={github} alt="github" height={50} />
          </a>
          <a href="https://www.linkedin.com/in/panayot-dimitrov-175442295/" onClick={closeDropdown}>
            <img src={linkedin} alt="linkedin" height={50} />
          </a>
        </div>
      )}
    </>
  );
};

export default nav;
