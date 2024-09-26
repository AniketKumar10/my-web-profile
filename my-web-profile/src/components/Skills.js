import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", level: "90%" },
    { name: "JS/React", level: "75%" },
    { name: "C/C++", level: "60%" },
    { name: "Python", level: "80%" },
    { name: "Java", level: "50%" },
    { name: "SQL", level: "80%" },
    { name: "Google Cloud", level: "70%" }
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-bar" key={skill.name}>
            <p>{skill.name}</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;