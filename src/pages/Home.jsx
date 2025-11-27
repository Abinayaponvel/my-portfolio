import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profilePic from "../assets/profile.jpg";

function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(storedSkills);
  }, []);

  return (
    <div className="home-container">
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Hello, <span>I'm SANKARESHWARAN</span></h1>
          <h2>Entry Level Data Analyst</h2>
          <p>
            -Turning raw data into clear, actionable insights-<br></br>
            I turn complex datasets into actionable insights with Python, SQL, and Power BI/Tableau. I specialize in EDA, risk profiling, and creating dashboards that help stakeholders make informed decisions.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">View My Projects</Link>
            <Link to="/resume" className="btn btn-outline">Download CV</Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={profilePic} alt="Profile" className="hero-img" />
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.length === 0 && <p style={{ textAlign: "center" }}>No skills added yet.</p>}
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <p>
          A Computer Science graduate with internship experience and a completed Data Analyst course. 
          As a fresher, I have gained exposure through academic projects and training, which helped me build skills in data handling, analysis, and visualization.
        </p>
        <p>
          I am eager to start my career, learn continuously, and contribute to the field of data analytics.
        </p>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-info">Email: sankarsuruli001@gmail.com</p>
        <p className="contact-info">Phone: +91 8870223542</p>
      </section>

      {/* ===== RESUME ===== */}
      <section id="resume" className="resume">
        <h2 className="section-title">Resume</h2>
        <div className="resume-button-container">
          <Link to="/resume" className="btn">Download Resume</Link>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} EnjoytheError | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
