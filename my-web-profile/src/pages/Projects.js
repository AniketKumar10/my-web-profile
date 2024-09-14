import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.",
    techStack: "React, CSS, HTML",
    link: "https://github.com/your-username/portfolio",
    imgSrc: "path-to-image", // Optional project image
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    techStack: "React, API, JavaScript",
    link: "https://github.com/your-username/weather-app",
    imgSrc: "path-to-image", // Optional project image
  },
  // Add more projects
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
