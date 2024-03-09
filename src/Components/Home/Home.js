import React from 'react';
import img from '../../Images/img.gif';
import './Home.css'

const Home = () => {

  return (
    <section
      id="hero"
      className="backgroundStyle"
    >
     
        <div className="main">
          <div
            className="box"
            
          >
            <h4 className="heygreet">Hey, I am </h4>
            <p data-text="Priyanka" className="name style">
              Priyanka Lalakiya
            </p>
            <h4 className="animation">
              <span></span>
            </h4>
            <div className="content-text">
              <p>
                Passionate web developer dedicated to creating engaging and
                interactive experiences. Proficient in modern technologies and
                frameworks. Committed to continuous learning and delivering
                high-quality solutions. Let's build something incredible
                together!
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
          </div>
          <div className="box1">
            <img className="image" src={img} alt="" />
          </div>
        </div>
  
    </section>
  );
};

export default Home;