import React from "react";
import "../nav/nav.css";
import linkedin from "../../../pictures/linkedin.png";
import github from "../../../pictures/github.png";
import logo from "../../../pictures/logo.jpg";

const nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-left">
        <img src={logo} alt="Logo" />
        <h1>Panayot Dimitrov</h1>
      </div>
      <div className="nav-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <a href="https://github.com/PanayotDimitrov">
          <img src={github} alt="github" height={50} />
        </a>
        <a href="https://www.linkedin.com/in/panayot-dimitrov-175442295/">
          <img src={linkedin} alt="linkedin" height={50} />
        </a>
      </div>
      
    </nav>
  );
};

export default nav;
