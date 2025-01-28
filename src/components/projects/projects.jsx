import React from "react";
import "./projects.css";
import project from "../../../pictures/project.jpg";
import project1 from "../../../pictures/c.jpg";
import project2 from "../../../pictures/management-system.png";
import project3 from "../../../pictures/drawing.jpg";
import project4 from "../../../pictures/carshop.webp";

const projects = () => {
  return (
    <section id="projects">
      <h2 className="project-title">Some of my Recent Projects</h2>
      <div className="container">
        <ul className="projects-list">
          <li className="project">
            <img src={project1} alt="Project" height={200} />
            <h3>Simple-C Project</h3>
            <div className="project-links">
              <a href="https://github.com/PanayotDimitrov/SimpleC-project">Code</a>
            </div>
          </li>
          <li className="project">
            <img src={project2} alt="Project" height={200} />
            <h3>Service Management System Project</h3>
            <div className="project-links">
              <a href="https://github.com/PanayotDimitrov/service-management-system">
                Backend
              </a>
              <a href="https://github.com/PanayotDimitrov/service-management-system-frontend">
                Frontend
              </a>
            </div>
          </li>
          <li className="project">
            <img src={project3} alt="Project" height={200} />
            <h3>Drawing project</h3>
            <div className="project-links">
              <a href="https://github.com/PanayotDimitrov/Drawing-project">Code</a>
            </div>
          </li>
          <li className="project">
            <img src={project4} alt="Project" height={200} />
            <h3>Car Shop Project</h3>
            <div className="project-links">
              <a href="https://github.com/PanayotDimitrov/Car-Shop">Code</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default projects;
