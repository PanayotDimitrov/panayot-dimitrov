import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/nav.jsx";
import About from "./components/about/about.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </StrictMode>
);
