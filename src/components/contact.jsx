import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container contact" id="contacts">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com/maianubhavhoon?igsh=bnp3MnZ3d3d3MXg=" className="items">
          <FaInstagramSquare className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/anubhav-choubey-653680150/" className="items">
          <FaLinkedin className="icons" />
        </a>
        <a href="https://github.com/Anubhav-2004" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:anubhavchoubey54321@gmail.com" className="items">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
