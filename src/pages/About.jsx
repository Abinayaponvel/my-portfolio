import React from "react";
import "./About.css";
import profileImg from "../data/profile.jpg"; // your profile image in src/data/

function About() {
  return (
    <div className="about-container">
      <h1 className="section-title">About Me</h1>

      <div className="about-content">
        {/* Profile Image */}
        <img src={profileImg} alt="Profile" className="profile-img" />

        {/* Text Content */}
        <div className="about-text">

          {/* Intro */}
          <section className="about-section">
            <h2>Intro</h2>
            <p>
              I am an entry-level Data Analyst from Theni, Tamil Nadu. I turn raw data into clear, decision-ready insights through EDA, clean visualizations.
            </p>
          </section>

          {/* Focus Areas */}
          <section className="about-section">
            <h2>Focus Areas</h2>
            <ul>
              <li><strong>EDA:</strong> Pattern finding, anomaly detection, clear summaries.</li>
              <li><strong>Dashboards:</strong> Power BI / Tableau for stakeholder-friendly visuals.</li>
              <li><strong>Risk Profiling:</strong> Segmentation and risk signals for better decisions.</li>
              <li><strong>Data Management & Quality:</strong> Data cleaning, preprocessing,validation,ETL workflows </li>
              <li><strong>Tools:</strong> Python (pandas, NumPy, matplotlib, seaborn), SQL, Excel, PowerBi.</li>
            </ul>
          </section>

          {/* Academic */}
          <section className="about-section">
            <h2>Academic</h2>
            <ul>
              <li><strong>Undergraduate:</strong> B.Sc. Computer Science (70%), 2022–2025</li>
              <li><strong>HSC:</strong> 52% (2021–2022)</li>
              <li><strong>SSLC:</strong> 67% (2019–2020)</li>
            </ul>
          </section>

          {/* Contact & Links */}
          <section className="about-section">
            <h2>Contact & Links</h2>
            <ul>
              <li><strong>Email:</strong> sankarsuruli001@email.com</li>
             <li>
  <strong>LinkedIn:</strong>
  <a 
    href="https://www.linkedin.com/in/sankareshwaran-suruli" 
    target="_blank" 
    rel="noreferrer"
  >
    linkedin.com/in/sankareshwaran-suruli
  </a>
</li>
              <li>
                <strong>GitHub:</strong> 
                <a href="https://github.com/dashboard" target="_blank" rel="noreferrer">
                  github.com/sankar
                </a>
              </li>
                 {/* Address */}
          <section className="about-section">
            <h2>Address</h2>
            <ul>
              <li><strong>Bodinayakkanur,<br></br>Theni district,<br></br>Tamilnadu.<br></br>625513</strong></li>
            
            </ul>
          </section>
              

            </ul>
          </section>

          {/* Personal Note */}
          <section className="about-section">
            <h2>Personal Note</h2>
            <p>
              My goal is to make data accessible for everyone by turning complex information into clear, meaningful insights that can be easily understood and applied.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;
