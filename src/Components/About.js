import React from "react";
import img from "../Images/my.png";

const About = () => {
  return (
    <>
      <section className="about backgroundStyle reveal">
        <h1 className="p-title">
          <span className="underline">About Me</span>
        </h1>
        <div className="about-container">
          <div className="content-container">
            <div className="boxabout0">
              <img className="myimage" src={img} alt="Profile" />
            </div>
            <div className="boxabout1">
              <p className="about-text">
                I'm Mann, an enthusiastic web developer with a passion for
                turning concepts into digital reality. My journey in web
                development has been marked by a relentless pursuit of creative
                solutions and a dedication to crafting engaging web experiences.
                I thrive on the ever-evolving nature of this field, where each
                project offers a chance to learn and innovate. I'm driven by the
                desire to create seamless online interactions, bridging the gap
                between businesses and their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
