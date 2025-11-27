import React from "react";
import "./Resume.css";
import resumeFile from "../data/resume.pdf"; // Add your PDF in src/data/

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="section-title">My Resume</h1>
      <p>Click the button below to download my latest resume.</p>
      <a href={resumeFile} download className="btn-download">Download Resume</a>
    </div>
  );
}

export default Resume;
