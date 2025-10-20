import React from "react";
import pofilePic from "/assets/Poom-pic.jpeg";
import cv from "/assets/Poom's Cv.pdf";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p className="highlight">
          I’m a passionate web developer who loves turning ideas into beautiful,
          functional websites.
        </p>
        <a href={cv} download className="btn-cv">
          Download CV
        </a>
        <a href="#contact" className="btn-contact">
          Get in Touch
        </a>
      </div>
      <div className="hero-image">
        <img src={pofilePic} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
