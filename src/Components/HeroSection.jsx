import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroContainer">
      <section className="hero-section hero-section-reflection">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Web Solutions with <span>MERN Stack Excellence</span>
          </h1>
          <p className="hero-description">
            Hello! I’m <span>Haseeb Hassan,</span> a skilled MERN Stack
            developer passionate about turning innovative ideas into reality.
            Specializing in MongoDB, Express.js, React, and Node.js, I craft
            robust and scalable web applications designed to engage and delight
            users. Join me in turning your ideas into powerful digital
            solutions!
          </p>
          <a href="#contact" className="hero-button">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
