import React from "react";
import ProjectData from "./ProjectData";
import github from "../Images/githublogo.png";
import Reveal from "./Reveal"


const ProjectCard = () => {
  return (
    <Reveal>
    <section className="backgroundStyle">
      <div className="container cnt">
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
                
                   { project.language.map((lang, langIndex) => (
                      <img
                        key={langIndex}
                        className="projectImage"
                        src={lang}
                        alt={`Language ${langIndex}`}
                      />
                    ))}
                
                  <img src={github} className="teal" alt="img" /> </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  
  );
};

export default ProjectCard;