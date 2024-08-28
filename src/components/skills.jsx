import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h1 className="skills-title">SKILLS</h1>
        {skills.map((data) => (
          <div className="items" key={data.id}>
            <div className="item"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt={data.title} className="skill-image" />
              <h3 className="skill-title">{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
