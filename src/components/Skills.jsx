import React, { useEffect, useState } from 'react';
import '../styles/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TagComponent from './TagComponent';
import "../styles/work.css"
import Works from './Projects'
const Skills = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('uiux');
  const code_icon = <i className='uil uil-arrow icon' style={{ color: "#516CF7" }}></i>;
  const ui_icon = <i className='bx bxs-palette icon2' style={{ color: "#9251F7" }}></i>;
  const codeButtonIcon = <i className="uil uil-arrow " style={{ color: "#516CF7", fontSize: "16px" }}></i>;
  const uXButtonIcon = <i className="bx bxs-palette " style={{ color: "#516CF7", fontSize: "16px" }}></i>;
  

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id={theme}>
      <div className="container">

      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle small_margin_bottom">My technical level</span>

        <div className="work__filters skills__tabs"> {/* Apply the "work__filters" and "skills__tabs" classes */}
        <span
  onClick={() => setActiveTab('coding')}
  className={`work__item2 ${activeTab === 'coding' ? 'active-work' : ''} skills__tab`}
>
  {activeTab === 'coding' ? <i className="uil uil-arrow " style={{ color: "white" }}></i> : codeButtonIcon}
  Software
</span>
<span
  onClick={() => setActiveTab('uiux')}
  className={`work__item2 ${activeTab === 'uiux' ? 'active-work' : ''} skills__tab`}
>
  {activeTab === 'uiux' ? <i className="bx bxs-palette" style={{ color: "white" }}></i> : uXButtonIcon}
  UI/UX
</span>

        </div>

        {activeTab === 'coding' && (
          <div className='tag_container' data-aos="fade-up">
            <div className="skills__content">
              <TagComponent
                tags={["JavaScript", "React", "Redux", "Dart", "CSS"]}
                heading='Front-end'
                icon={code_icon}
                ></TagComponent>
            </div>
            <div className="skills__content">
              <TagComponent
                tags={["C#", "C++", "C", "Python", "Java", "Scala", "Matlab", "Assembly"]}
                heading='Back-end'
                icon={code_icon}
                ></TagComponent>
            </div>
            {/* <div className='tag_container' */}
      {/* data-aos="fade-up"> */}
        <div className="skills__content">

          <TagComponent
            tags={["Unity","TailWindCSS","Scikit-Learn","Tensorflow","Numpy","OpenCV","Apache Spark","Git","SourceTree","Pandas","Unreal Engine","Database-lib","Axios"]}
            heading='Frameworks etc' 
            icon={code_icon}
            ></TagComponent>
            </div>

          </div>
        )}

        {activeTab === 'uiux' && (
          <div className='tag_container'  data-aos="fade-up">
            <div className="skills__content_purple">
              <TagComponent
                tags={["UI Design", "Visual Design", "UX Design", "Testing", "Interaction Design", "Accessability", "Prototyping", "Web/Mobile Design", "Agile Development", "AR/VR Design", "User Research", "Wireframing", "Human-Centered Design", "Experience Driven Design"]}
                heading='UI/UX Skills'
                color="#9251F7"
                icon={ui_icon}
                ></TagComponent>
            </div>  
          <div className="skills__content_purple">

          <TagComponent
          tags={["Figma","Photoshop","Penbot","Sketch","Adobe XD","Proto.io","Canva","Miro","Diagram.io","Mural","Trello"]}
          heading='UI/UX Tools' 
          color="#9251F7"
          icon={ui_icon}
          ></TagComponent>
          </div>
          </div>
        )}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* ... Rest of your component code ... */}
      </section>
      
    </div>
        </div>
  );
};

export default Skills;
