import React, { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projects.length === 0 && <p>No projects yet. Add from Admin panel.</p>}
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.image} alt={proj.name} />
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noreferrer" className="btn-github">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
