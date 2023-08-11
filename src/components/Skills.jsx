import React, { useEffect, useState } from 'react';
import '../styles/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TagComponent from './TagComponent';
import "../styles/work.css"
import Works from './Works'
const Skills = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('coding');
  const code_icon = <i className='uil uil-arrow icon' style={{ color: "#516CF7" }}></i>;
  const ui_icon = <i className='bx bxs-palette icon2' style={{ color: "#9251F7" }}></i>;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id={theme}>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="work__filters skills__tabs"> {/* Apply the "work__filters" and "skills__tabs" classes */}
          <span
            onClick={() => setActiveTab('coding')}
            className={`work__item ${activeTab === 'coding' ? 'active-work' : ''} skills__tab`}
          >
            Coding Skills
          </span>
          <span
            onClick={() => setActiveTab('uiux')}
            className={`work__item ${activeTab === 'uiux' ? 'active-work' : ''} skills__tab`}
          >
            UI/UX Skills
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
            tags={["Unity","TailWindCSS","Scikit-Learn","Tensorflow","Numpy","OpenCV","Apache Spark","Git","SourceTree","Pandas","Unity","Unreal Engine","Database-lib","Axios"]}
            heading='Frameworks etc' 
            icon={code_icon}
            ></TagComponent>
            </div>

          </div>
        )}

        {activeTab === 'uiux' && (
          <div className='tag_container'>
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
  );
};

export default Skills;
