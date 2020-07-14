import React from "react";
import me from "./mecircle.png";
import "./AboutDesk.css";

function AboutDesk() {
  return (
    <div className="AboutDesk">
      <div className="heroBanner">
        <div className="collage">
          <img className="collageImage" src={me} alt="pic" />
        </div>
        <div className="aboutText">
          <p className="headText">Meet Zack.</p>
          <p className="bioText">
            Hey, that's me! Hi, I'm Zack, a fullstack software engineer with a
            passion for crisp, and human-centered front-end design. I am
            currently a fullstack software engineer II with a Boston-based
            financial company. My day to day involves bringing legacy backend
            into the 21st century, pushing for client-friendly UI/UX, and
            building out and supporting new microservices.
          </p>
        </div>
      </div>
      <div className="heroBannerPersonal">
        <h1>Top Skills</h1>
        <div className="skillHolder">
          <div>
            <i class="fas fa-code fa-lg"></i>
            <p>Java</p>
          </div>
          <div>
            <i class="fas fa-desktop fa-lg"></i>
            <p>Web Design & Development</p>
          </div>
          <div>
            <i class="fas fa-code fa-lg"></i>
            <p>Javascript</p>
          </div>
        </div>
      </div>
      <div className="heroBottom">
        <div className="heroBannerExtrasIns">
          <h1>Find Me</h1>
          <div className="socialIcons">
            <i class="fab fa-linkedin fa-2x"></i>
            <i class="fab fa-github-square fa-2x"></i>
          </div>
        </div>

        <div className="heroBannerExtrasIns">
          <h1>Contact Me</h1>
          <div className="socialIcons">
            <i class="fas fa-at fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDesk;
