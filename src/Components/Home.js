import React from "react";
import img from './imgcode.gif';

const Home = () => {
  return (
    <section className="home">
      <div className="main">
        <div className="box">
          <div className="text">
            <h3 className="heygreet">Hey, I am </h3>
            <h1 data-text="Priyanka" className="name">Priyanka</h1>
          
            <h3 className="animation">
              <span></span>
            </h3>
          </div>
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
