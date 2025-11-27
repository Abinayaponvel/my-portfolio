import React, { useEffect, useState } from "react";
import "./Certifications.css";

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("certifications")) || [];
    setCertifications(stored);
  }, []);

  return (
    <div className="certifications-container">
      <h2 className="certifications-title">My Certifications</h2>

      <div className="cert-grid">
        {certifications.length === 0 ? (
          <p>No certifications uploaded yet.</p>
        ) : (
          certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <img
                src={cert.image}          // Base64 → ALWAYS works
                alt={cert.name}
                className="cert-image"
              />
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
              <span>{cert.date}</span>

              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Certifications;
