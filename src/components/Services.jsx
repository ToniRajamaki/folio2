import React, { useState } from "react";
import "../styles/services.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import ReactCardFlip from 'react-card-flip';


const Services = ({ theme }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (i) => {
    setToggleState(i);
  };
// ICONS
  const arrowIcon= <i className="uil uil-arrow services__icon"></i>
  const uIIcon=  <i className="bx bxs-palette services__icon"></i>
  const penIcon=<i class='bx bx-code-curly services__icon'></i>
  useEffect(() => {

  AOS.init({ duration: 2000 });
}, []);
  return (
    <div id={theme}>
      <section className="services section" id="services" >
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid" data-aos="fade-up">
      <ServiceCard
      modal_description={"Modular Mindset: Writing Reusable Code Blocks."}
      icon={arrowIcon}
      title={`Web
      Development`}
      items={["Fullstack Complete Solutions.","Beautiful inside and out is a must.","Responsive Designs for All Devices.","Front-End Frameworks for Efficiency."]}
      />

      <ServiceCard
      modal_description={"Eye Catching, Modern & Interactive Human-centered Design."}
      icon={uIIcon}
      title={`UI/UX
      Design`}
      items={["Beautiful UI & Delightful UX","Memorable Empathetic Interactions.","Awareness to ease of access","Strong UI/UX Expertize"]}
      />

      <ServiceCard
      modal_description={"Systematic Solution provider: Finding Order in Chaos."}
      icon={penIcon}
      title={`Software
      Development`}
      items={["Clean & Easy-to-Read Code","Versatile Troubleshooter","Resourceful Problem solver","Agile Developing & Lean Mindset"]}
      />
        </div>
      </section>
      <br></br>
      <br></br>
    </div>
  );
};

export default Services;
