import React from "react";
import ProjectData from "./ProjectData";


const ProjectCard = () => {
  return (
  
    <section  className="backgroundStyle reveal">
    <div className="container">
    <h1 className="p-title">
  <span className="p-title-text">My Projects</span>
   </h1>
<div className="project-container">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgsrc} alt="img" />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
              <div className="project-btn">
              <button className="teal">Demo</button>
              <button className="teal">Github</button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default ProjectCard;
