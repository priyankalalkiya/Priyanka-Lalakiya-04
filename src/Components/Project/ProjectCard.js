import React from "react";
import ProjectData from "./ProjectData";
import github from "../../Images/githublogo.png";
import './Project.css'
import Reveal from "../Home/Reveal";

const ProjectCard = () => {
  return (
    <section id="project" className="backgroundStyle">
      <div className="container cnt">
        <h1 className="project-top">My <span className="me">Projects</span></h1>
        <div className="project-container">
          {ProjectData.map((project, index) => (
            <Reveal key={index}>
              <div className="project-card">
                <img className="image-warpper" src={project.imgsrc} alt="img" />
                <div className="project-description">
                  <h3 className="project-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-btn">
                    {project.language.map((lang, langIndex) => (
                      <img
                        key={langIndex}
                        className="projectImage"
                        src={lang}
                        alt={`Language ${langIndex}`}
                      />
                    ))}
                    <div className="git">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={github} className="teal" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
