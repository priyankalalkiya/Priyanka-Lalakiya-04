// Reveal.js
import React, { useEffect } from "react";

const Reveal = ({ children }) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - 150 || revealTop >= 0) {
          revealElements[i].classList.add("active");
        } else {
          revealElements[i].classList.remove("active");
        }
      }
    };

    // Call handleScroll once to apply initial state
    handleScroll();

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="reveal active">{children}</div>;
};

export default Reveal;
