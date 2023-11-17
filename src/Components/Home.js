import React from "react";
import img from '../Images/img.gif';

const Home = () => {
  return (
    
    <section className="home backgroundStyle">
      <div className="main">
        <div className="box">
          <div className="text">
            <h3 className="heygreet">Hey, I am </h3>
            <h1 data-text="Priyanka" className="name style">Priyanka Lalakiya </h1>
            <h3 className="animation">
              <span></span>
            </h3>
            <div className="content-text">
            <p> hr Starting the process of developing an API-driven React website opens up a world of infinite possibilities for improving your website's functionality and providing users with real-time data and information.",
        demo:"url.com</p></div>
        <div className="btnbox">
            <button className="resume-btn" >Downlode Resume <i class="fa-solid fa-download"></i></button>
          </div> </div>
        </div>
        <div className="box1">
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default Home;
