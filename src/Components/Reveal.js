import React, { useEffect, useRef, useState } from "react";

const Reveal = ({ children }) => {
  const revealRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(revealRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={revealRef} className={`reveal ${isVisible ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default Reveal;
