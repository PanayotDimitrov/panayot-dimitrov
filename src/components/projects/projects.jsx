import React from "react";
import "./projects.css";
import project from "../../../pictures/project.jpg";

const projects = () => {
  return (
    <section id="projects">
      <h2 className="project-title">Some of my Recent Projects</h2>
      <div className="container">
        <ul className="projects-list">
          <li className="project">
            <img src={project} alt="Project" height={200} />
            <h3>Service management system</h3>
            <p>
              description //todo
            </p>
          </li>
          <li className="project">
            <img src={project} alt="Project" height={200} />
            <h3>Service management system</h3>
            <p>
              description //todo
            </p>
          </li>
          <li className="project">
            <img src={project} alt="Project" height={200} />
            <h3>Service management system</h3>
            <p>
              description //todo
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default projects;
