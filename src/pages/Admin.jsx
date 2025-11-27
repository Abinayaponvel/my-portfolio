import React, { useState, useEffect } from "react";
import "./Admin.css";

function Admin() {
  // ===== Projects state =====
  const [projects, setProjects] = useState([]);
  const [projName, setProjName] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projGithub, setProjGithub] = useState("");
  const [projImage, setProjImage] = useState(null);

  // ===== Skills state =====
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  // ===== Certifications state =====
  const [certifications, setCertifications] = useState([]);
  const [certName, setCertName] = useState("");
  const [certOrg, setCertOrg] = useState("");
  const [certDate, setCertDate] = useState("");
  const [certLogo, setCertLogo] = useState(null);
  const [certLink, setCertLink] = useState("");

  // ===== Load data from localStorage =====
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    const storedCerts = JSON.parse(localStorage.getItem("certifications")) || [];

    setProjects(storedProjects);
    setSkills(storedSkills);
    setCertifications(storedCerts);
  }, []);

  // ===== Helper: Convert file to Base64 =====
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  // ===== Add Project =====
  const handleAddProject = async () => {
    if (!projName || !projDesc || !projGithub || !projImage) return alert("Fill all fields!");

    const base64Image = await convertToBase64(projImage);

    const newProject = {
      name: projName,
      desc: projDesc,
      github: projGithub,
      image: base64Image,
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setProjName("");
    setProjDesc("");
    setProjGithub("");
    setProjImage(null);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  // ===== Add Skill =====
  const handleAddSkill = () => {
    if (!skillName || !skillLevel) return alert("Fill all fields!");

    const newSkill = { name: skillName, level: skillLevel };
    const updatedSkills = [...skills, newSkill];

    setSkills(updatedSkills);
    localStorage.setItem("skills", JSON.stringify(updatedSkills));

    setSkillName("");
    setSkillLevel("");
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  };

  // ===== Add Certification =====
  const handleAddCertification = async () => {
    if (!certName || !certOrg || !certDate || !certLogo) return alert("Fill all fields!");

    const base64Image = await convertToBase64(certLogo);

    const newCert = {
      name: certName,
      organization: certOrg,
      date: certDate,
      image: base64Image,
      link: certLink,
    };

    const updatedCerts = [...certifications, newCert];
    setCertifications(updatedCerts);
    localStorage.setItem("certifications", JSON.stringify(updatedCerts));

    setCertName("");
    setCertOrg("");
    setCertDate("");
    setCertLogo(null);
    setCertLink("");
  };

  const handleDeleteCertification = (index) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
    localStorage.setItem("certifications", JSON.stringify(updatedCerts));
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* ===== ADD PROJECT ===== */}
      <h2>Add Project</h2>
      <div className="admin-form">
        <input type="text" placeholder="Project Name" value={projName} onChange={(e) => setProjName(e.target.value)} />
        <input type="text" placeholder="Project Description" value={projDesc} onChange={(e) => setProjDesc(e.target.value)} />
        <input type="text" placeholder="GitHub URL" value={projGithub} onChange={(e) => setProjGithub(e.target.value)} />
        <input type="file" onChange={(e) => setProjImage(e.target.files[0])} />
        <button onClick={handleAddProject} className="btn">Add Project</button>
      </div>

      <h2>Existing Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-item" key={idx}>
            <img src={proj.image} alt={proj.name} />
            <div className="project-info">
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <button onClick={() => handleDeleteProject(idx)} className="btn-delete">Delete</button>
          </div>
        ))}
      </div>

      {/* ===== ADD SKILL ===== */}
      <h2>Add Skill</h2>
      <div className="admin-form">
        <input type="text" placeholder="Skill Name" value={skillName} onChange={(e) => setSkillName(e.target.value)} />
        <input type="text" placeholder="Skill Level (Beginner / Intermediate / Advanced)" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} />
        <button onClick={handleAddSkill} className="btn">Add Skill</button>
      </div>

      <h2>Existing Skills</h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <span>{skill.name} - {skill.level}</span>
            <button onClick={() => handleDeleteSkill(idx)} className="btn-delete">Delete</button>
          </div>
        ))}
      </div>

      {/* ===== ADD CERTIFICATION ===== */}
      <h2>Add Certification</h2>
      <div className="admin-form">
        <input type="text" placeholder="Certification Name" value={certName} onChange={(e) => setCertName(e.target.value)} />
        <input type="text" placeholder="Organization" value={certOrg} onChange={(e) => setCertOrg(e.target.value)} />
        <input type="text" placeholder="Date (e.g., Jan 2024)" value={certDate} onChange={(e) => setCertDate(e.target.value)} />
        <input type="file" onChange={(e) => setCertLogo(e.target.files[0])} />
        <input type="text" placeholder="Certificate Link (optional)" value={certLink} onChange={(e) => setCertLink(e.target.value)} />
        <button onClick={handleAddCertification} className="btn">Add Certification</button>
      </div>

      <h2>Existing Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, idx) => (
          <div className="cert-item" key={idx}>
            <img src={cert.image} alt={cert.name} className="cert-logo" />
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
              <span>{cert.date}</span>
              {cert.link && <a href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>}
            </div>
            <button onClick={() => handleDeleteCertification(idx)} className="btn-delete">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
