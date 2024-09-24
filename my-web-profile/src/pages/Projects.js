import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React just as a web-dev practice and hands-on experience",
    techStack: "React, JavaScript, CSS, HTML",
    link: "https://github.com/AniketKumar10/my-web-profile",
    // imgSrc: "path-to-image", // Optional project image
  },
  {
    title: "Medicine Recom. Sys.",
    description: "A medical recommendation system that predicts the outcomes like disease, medication, etc; based on the symptoms entered",
    techStack: "React, API, JavaScript, ML",
    link: "https://github.com/AniketKumar10/medicine-reccomendation-better-ui",
    //imgSrc: "path-to-image", // Optional project image
  },
  {
    title: "Trip Cost Estimator",
    description : "From the dataset extracted, an BI page was generated for the user(org.) to view data better in graphical ways",
    techStack: "AWS, GCP, LookerStudio, Python, Jupyternotebook",
    link: "https://lookerstudio.google.com/s/tlJl_3jgv6I",
    //imgSrc: "path-to-image", // Optional project image
  },
  {
    title:"DeadLine Detector",
    description:"The project was build based on an OCR system and ML/AI that reads documents and creates essential reminders accordingly",
    techStack:"NanoNets, ML, AI",
    link:""
  }
  // Add more projects
];

const Projects = () => {
  return (
    <body>
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {/* <img src={project.imgSrc} alt={project.title} className="project-image" /> */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default Projects;
