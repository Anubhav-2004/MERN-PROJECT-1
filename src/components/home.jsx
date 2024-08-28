import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Anubhav_Resume (1).pdf';
import me from './data/me.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile", "My Name is Anubhav Choubey"],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h1 ref={typedRef}></h1>
        <p>I'm a passionate fullstack developer with a knack for creating engaging web applications. Feel free to explore my work and get in touch!</p>
        <a href={pdf} download="anubhav_resume.pdf" className="btn">Download Resume</a>
      </div>
      <div className="right">
        <div className="img"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <img src={`/assets/${me.imgSrc}`} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
