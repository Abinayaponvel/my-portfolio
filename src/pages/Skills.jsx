import React, { useState, useEffect } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(storedSkills);
  }, []);

  return (
    <div className="skills-page-container">
      <h1 className="section-title">My Skills</h1>
      <div className="skills-grid">
        {skills.length === 0 && <p style={{ textAlign: "center" }}>No skills added yet.</p>}
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
