import React, { useEffect } from "react";
import "../styles/about.css";
import Info from "./Info";
import AOS from "aos";
import "aos/dist/aos.css";
import '@dotlottie/player-component';
import data from "../Animation - 1712483699794.json"

const About = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id={theme}>
      <>
      <div className="cover"></div>
      <section className="about section " id="about">

        <div className="about__container container grid" data-aos="fade-up">
        <dotlottie-player
          src={JSON.stringify(data)}
          autoplay
          loop
          style={{ width: "450px" }}
/>

<div>
<h2 className="section__title about-title">About me</h2>
        {/* <span className="section__subtitle">My introduction</span> */}
          <div className="about__data">
           <p data-aos="zoom-in"  data-aos-delay="200" data-aos-duration="300" className="home__description">
      Greetings! I'm Toni! With a solid <span className="hl">2-year</span> background in professional <span className="hl">Software Development</span> and a <span className="hl">Master's degree</span> in <span className="hl">Human Technology Interaction</span>, I'm a curious learner who values <span className="hl">self-development.</span> I have a deep knowledge and passion for <span className="hl">UI/UX Design</span>, making me a well-rounded creator. Alongside my technical skills, I'm <span className="hl">business-knowledgeable</span>, adding value to your team. If you're seeking someone who aligns with these skills and values, then you're the kind of team I'm <span className="hl">excited</span> to join.
      </p>
          </div>
</div>
        </div>
      </section>
            </>
    </div>
  );
};

export default About;
