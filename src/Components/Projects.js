import React from "react";
import img from './imgcode.gif';
const Projects = () => {
  return (
    <>
      <div className="container">
        <h1 className="project-title">Projects</h1>
        <div className="project-container">
          <div className="project-card">
            <img src={img} alt="img" />
            <h2 className="project-title">Project Title</h2>
            <div className="project-description">
              <p>mann</p>
            </div>
            <div className="project-btn">
                  <button>Demo</button>
                  <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
