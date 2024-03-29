import React from "react";
import AOS from 'aos';

const Social = () => {
  return (
    <div className="home__social">
      {/* <a
        href="https://www.instagram.com/hazemfarhati/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a> */}

      <a
        href="https://www.linkedin.com/in/toni-rajam%C3%A4ki-025055283//"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-right"
        data-aos-delay="1400"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/ToniRajamaki"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-right"
        data-aos-delay="1600"

      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
