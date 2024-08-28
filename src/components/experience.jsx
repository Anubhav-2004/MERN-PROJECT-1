import React from 'react';
import experience from './data/experience.json';

const Experience = () => {
  return (
    <div className="container ex">
      <h1 className="ex-title">EXPERIENCE</h1>
      {experience.map((data) => (
        <div key={data.id} className="exp-items">
          <div className="exp-left">
            <img src={`/assets/${data.imageSrc}`} alt={data.role} />
          </div>
          <div className="exp-right">
            <h2>{data.role}</h2>
            <h4>{data.startDate} - {data.endDate} | {data.location}</h4>
            <ul>
              {data.experiences.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
