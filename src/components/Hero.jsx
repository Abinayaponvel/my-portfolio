import React from "react";
import "./Hero.css";
import profilePic from "../assets/profile.jpg"; // Add your image here

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Hello, <span>I'm Abinaya</span></h1>
        <h2>Frontend Developer & Designer</h2>
        <p>
          Crafting digital experiences that blend creativity with clean,
          modern, interactive UI.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="/resume" className="btn btn-outline">Download CV</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" />
          {/* You can add floating icons here */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
