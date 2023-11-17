import React from "react";
import img from "./my.png";
import backgroundImg from './bg1.avif';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
 
      <section className="about" style={backgroundStyle}>
        <h1 className="p-title">
          <span className="p-title-text">About Me</span>
        </h1>
        <div className="about-container">
          <div className="content-container">
            <div className="boxabout0">
              <img className="myimage" src={img} alt="Profile" />
            </div>
            <div className="boxabout1">
              <p className="about-text">
                "I am <span className="highlight">Priyanka</span> from a Latin text written by a Roman
                Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                Cicero, who influenced the Latin language greatly. The "filler" text
                we know today has been altered over the years. In fact, "Lorem"
                isn't actually a Latin word. It is suggewe used real text,
                it would possibly distract from the DESIGLatin word. It is suggested that the reason that
                the text starts with "Lorem" is because there was a page breakething like
                that. The reason we use Lorem Ipsum is simple. If we used real text,
                it would possibly distN of a s us
                to SEE the design without being distracted by readable or unrealistic text.
                . "
              </p>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
};

export default About;
