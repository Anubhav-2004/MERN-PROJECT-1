import React from 'react';
import project from './data/project.json';

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="container projects my-5">
        <h1 className="text-center">Projects</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {project.map((data) => (
            <div key={data.id} className="col-sm-6 col-md-4 col-lg-3 mx-4 my-4">
              <div 
                className="card bg-dark text-light h-100"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img-container d-flex justify-content-center align-items-center p-3">
                  <img 
                    src={`/assets/${data.imageSrc}`} 
                    className="card-img-top" 
                    alt={data.title} 
                    style={{
                      width: "80%",
                      height: "auto",
                      objectFit: "cover",
                      border: "2px solid #1abc9c",
                      borderRadius: "12px",
                    }} 
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.source} className="btn btn-primary">Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
