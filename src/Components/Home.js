import React from "react";
import img from "../Images/img.gif";
import Reveal from "./Reveal";

const Home = () => {
  return (
    <Reveal>
      <section className="backgroundStyle reveal">
        <div className="home">
          <div className="main">
            <div className="box">
              <h4 className="heygreet">Hey, I am </h4>
              <p data-text="Priyanka" className="name style">
                Priyanka Lalakiya{" "}
              </p>
              <h4 className="animation">
                <span></span>
              </h4>
              <div className="content-text">
                <p>
                  hr Starting the process of developing an API-driven React
                  website opens up a world of infinite possibilities for
                  improving your website's functionality and providing users
                  with real-time data and information.", demo:"url.com
                </p>
              </div>
              <div className="btnbox">
                <button className="resume-btn">
                  <a
                    href="./Lalakiya_Priyanka_Resume_28_10_23.pdf"
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
        </div>
      </section>
    </Reveal>
  );
};

export default Home;
