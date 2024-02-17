
import React from "react";
import img from "../../Images/my.png";
import './About.css'
const About = () => {
  return (
    <> <section id="about" className="about backgroundStyle">
          <h1 className="about-title">
            About <span className="me">Me</span>
          </h1>    
            <div className="content-container">
              <div className="boxabout0">
                <img className="myimage" src={img} alt="Profile" />
              </div>
              <div className="boxabout1">
                <p className="about-text">
                 I am <span className="highlight">Priyanka</span>, a passionate web
                  developer dedicated to crafting meaningful and engaging
                  digital experiences. With a creative mindset and technical
                  expertise, I bring ideas to life, ensuring they are not just
                  functional but also aesthetically pleasing. My journey in web
                  development is driven by a commitment to excellence and a love
                  for problem-solving. From designing user-friendly interfaces
                  to implementing robust backend solutions, I strive for
                  perfection in every project. Let's collaborate and create
                  something extraordinary that resonates with users and leaves a
                  lasting impression in the digital realm.
                </p>
              </div>
            </div>
        </section>
    </>
  );
};
export default About;
