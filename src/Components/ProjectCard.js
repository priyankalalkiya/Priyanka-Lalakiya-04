import React from "react";
import ProjectData from "./ProjectData";

const ProjectCard = () => {
  return (
    <section>
    <div className="container">
    <h1 className="project-title">
  <span className="project-title-text">Projects</span>
</h1>

      <div className="project-container">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgsrc} alt="img" />
            <h2 className="project-title">{project.title}</h2>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <div className="project-btn">
              <button className="demo teal">{project.demo}</button>
              <button className="teal">Github</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectCard;
