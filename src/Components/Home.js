import React from "react";
import img from './img.gif';
import backgroundImg from './bg1.avif'; // Import the background image

const Home = () => {
  // Define the style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <body>
    <section className="home" style={backgroundStyle}>
      <div className="main">
        <div className="box">
          <div className="text">
            <h3 className="heygreet">Hey, I am </h3>
            <h1 data-text="Priyanka" className="name style">Priyanka Lalakiya </h1>
            <h3 className="animation">
              <span></span>
            </h3>
            <div  className="content-text">
            <p> hr Starting the process of developing an API-driven React website opens up a world of infinite possibilities for improving your website's functionality and providing users with real-time data and information.",
        demo:"url.com</p></div>
            <button className="resume-btn" >Downlode Resume <i class="fa-solid fa-download"></i></button>
          </div>
        </div>
        <div className="box1">
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
    </body>
  );
};

export default Home;
