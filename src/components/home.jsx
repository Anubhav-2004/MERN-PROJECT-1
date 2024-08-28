import React from 'react';
import pdf from '../pdf/Anubhav_Resume (1).pdf';
import me from './data/me.json';

const Home = () => {
  return (
    <div className="container home">
      <div className="left">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer with a knack for creating engaging web applications. Feel free to explore my work and get in touch!</p>
        <a href={pdf} download="anubhav_resume.pdf" className="btn">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${me.imgSrc}`} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Home;
