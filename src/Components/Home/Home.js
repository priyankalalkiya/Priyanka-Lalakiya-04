import React from 'react';
import img from '../../Images/img.gif';
import Reveal from './Reveal';
import './Home.css';

const Home = () => {
  return (
    <section id="hero" className="backgroundStyle">
      <div className="main">
        <Reveal>
          <div className="box">
            <h4 className="heygreet">Hey, I am </h4>
            <Reveal>
              <p data-text="Priyanka" className="name style">
                Priyanka Lalakiya
              </p>
            </Reveal>
            <h4 className="animation">
              <span></span>
            </h4>
            <Reveal>
              <div className="content-text">
                <p>
                  Passionate web developer dedicated to creating engaging and
                  interactive experiences. Proficient in modern technologies
                  and frameworks. Committed to continuous learning and
                  delivering high-quality solutions. Let's build something
                  incredible together!
                </p>
              </div>
          
          
              <div className="btnbox">
             
                <button className="resume-btn">
                  <a
                    href="./Lalakiya_Priyanka_Resume.pdf"
                    download="Resume_Lalakiya_Priyanka"
                  >
                    Download Resume <i className="fa-solid fa-download"></i>
                  </a>
                </button>   
              </div>
              </Reveal>
          </div>
        </Reveal>
        <Reveal>
          <div className="box1">
            <img className="image" src={img} alt="" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
