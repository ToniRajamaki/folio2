import React from "react";

const Info = () => {
  return (
    <div className="about__info center container">
      <div className="about__box">
        <span className="about__title">2 Years +</span>
        <h3 className="about__subtitle">Experience</h3>
        <span>
          <i className="bx bx-award about__icon"></i>
          </span>
      </div>

      <div className="about__box">
        <span className="about__title">30+</span>
        <h3 className="about__subtitle">Projects</h3>
        <span>
          <i className="bx bx-briefcase-alt about__icon"></i>
          </span>
      </div>

      <div className="about__box">
        <span className="about__title">2500+</span>
        <h3 className="about__subtitle">Commits</h3>
        <span>
          <i className="bx bx-support about__icon"></i>
          </span>
      </div>

      <div className="about__box">
        <span className="about__title">2018</span>
        <h3 className="about__subtitle">Coding Since</h3>
        <span>
          <i className="bx bx-support about__icon"></i>
          </span>
      </div>

   
    </div>
  );
};

export default Info;
