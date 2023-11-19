import React, { useEffect } from "react";
import img from '../Images/img.gif';


const Home = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          revealElements[i].classList.add('active');
        } else {
          revealElements[i].classList.remove('active');
        }
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    
    <section className="home backgroundStyle reveal">
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