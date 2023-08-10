import React, { useState } from "react";
import "../styles/services.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";


const Services = ({ theme }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (i) => {
    setToggleState(i);
  };
// ICONS
  const arrowIcon= <i className="uil uil-arrow services__icon"></i>
  const uIIcon=  <i className="uil uil-web-grid services__icon"></i>
  const penIcon=<i className="uil uil-edit services__icon"></i>
  useEffect(() => {

  AOS.init({ duration: 2000 });
}, []);
  return (
    <div id={theme}>
      <section className="services section" id="services" data-aos="fade-up">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
      <ServiceCard
      modal_description={" Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look."}
      icon={arrowIcon}
      title={`Web
      Development`}
      items={["a","b","c"]}
      />

      <ServiceCard
      modal_description={"Totally awesome UI/UX design!"}
      icon={uIIcon}
      title={`UI/UX
      Design`}
      items={["a","b","c"]}
      />

      <ServiceCard
      modal_description={"I code anything"}
      icon={uIIcon}
      title={`Software
      Development`}
      items={["a","b","c"]}
      />
        </div>
      </section>
    </div>
  );
};

export default Services;
