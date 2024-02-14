import { useState } from "react";
import "../styles/qualification.css";
import Experience from "./Experience";

const Qualifications = ({ theme }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (i) => {
    setToggleState(i);
  };
  return (
    <div> 

    <section className="qualification section" id={"qualification"}>
     <h2 className="section__title">Experience</h2>
     <span className="section__subtitle">My personal journey</span>
    <div>
      <Experience theme={theme}></Experience>
    </div>
    </section>
    </div>
   
  );
};

export default Qualifications;
