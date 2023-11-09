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
        <h1 className="title">
          <span className="title-text">About Me</span>
        </h1>
        <div className="about-container">
          <div className="content-container">
            <div className="boxabout0">
              <img src={img} alt="Profile" />
            </div>
            <div className="boxabout1">
              <p>
                "It was originally taken from a Latin text written by a Roman
                Scholar, Sceptic and Philosopher by the name of Marcus Tullius
                Cicero, who influenced the Latin language greatly. The "filler" text
                we know today has been altered over the years. In fact, "Lorem"
                isn't actually a Latin word. It is suggested that the reason that
                the text starts with "Lorem" is because there was a page break
                spanning the word "Do-lorem". If you are looking for a translation
                of the text, it's meaningless. The original text talks about the
                pain and love involved in the pursuit of pleasure or something like
                that. The reason we use Lorem Ipsum is simple. If we used real text,
                it would possibly distract from the DESIGN of a s us
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
