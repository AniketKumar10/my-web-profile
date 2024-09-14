import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
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
