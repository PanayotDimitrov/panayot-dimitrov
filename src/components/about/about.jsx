import React from "react";
import "./about.css";
import face from "../../../pictures/face.jpg";

const About = () => {
  return (
    <div className="main-about-div" id="about">
      <div className="left-about-div">
        <h2 className="font">
          Hi <br />
          I`m <span className="about-text-name">Panayot</span> <br />a Web
          Developer
        </h2>
        <p>
          I am hard-working programmer with a flair for creating elegant
          solutions in the least amount of time. I am well organized, punctual
          and team-working player. I like to spend my free time playing video
          games, hanging out with friends or just listening to music and
          programming.
        </p>
      </div>
      <div className="right-about-div">
        <img src={face} alt="face" />
      </div>
    </div>
  );
};

export default About;
