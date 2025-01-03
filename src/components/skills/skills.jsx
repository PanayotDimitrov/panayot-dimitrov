import React from "react";
import "./skills.css";
import html from "../../../skills-pictures/html.png";
import css from "../../../skills-pictures/css.png";
import js from "../../../skills-pictures/js.png";
import react from "../../../skills-pictures/react.png";
import bootstrap from "../../../skills-pictures/bootstrap.png";
import java from "../../../skills-pictures/java.png";
import spring from "../../../skills-pictures/spring.png";
import mysql from "../../../skills-pictures/mysql.png";
import git from "../../../skills-pictures/git.png";
import github from "../../../skills-pictures/github.png";

const skills = () => {
  return (
    <section id="skills">
      
        <h2 className="skills-title">Skills</h2>
      
      <div className="skills-container">
        <ul>
          <li>
            <img src={html} alt="HTML" />
            <div className="li-text">HTML</div>

          </li>
          <li>
            <img src={css} alt="CSS" />
            <div className="li-text">CSS</div>

          </li>
          <li>
            <img src={js} alt="JavaScript" />
            <div className="li-text">JavaScript</div>

          </li>
          <li>
            <img src={react} alt="React" />
            <div className="li-text">React</div>

          </li>
          <li>
            <img src={bootstrap} alt="Bootstrap" />
            <div className="li-text">Bootstrap</div>

          </li>
          <li>
            <img src={java} alt="Java" />
            <div className="li-text">Java</div>

          </li>
          <li>
            <img src={spring} alt="SpringBoot" />
            <div className="li-text">SpringBoot</div>

          </li>
          <li>
            <img src={mysql} alt="MySQL" />
            <div className="li-text">MySQL</div>

          </li>
          <li>
            <img src={git} alt="Git" />
            <div className="li-text">Git</div>

          </li>
          <li>
            <img src={github} alt="GitHub" />
            <div className="li-text">GitHub</div>

          </li>
        </ul>
      </div>
    </section>
  );
};

export default skills;
