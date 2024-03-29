import React from 'react';
import '../styles/skills2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TagComponent from './TagComponent';

// Array of skill objects
const front = [
  { name: 'React', bgColor: 'rgba(110, 220, 250,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/react-2.svg' },
  { name: 'Redux', bgColor: 'rgba(115, 76, 187,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/redux.svg' },
  { name: 'TypeScript', bgColor: 'rgba(0, 122, 204,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/typescript.svg' },
  { name: 'JavaScript', bgColor: 'rgba(240,219,79,0.25)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/logo-javascript.svg' },
  { name: 'Bootstrap', bgColor: 'rgba(86, 61, 124,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/bootstrap-4.svg' },
  { name: 'SASS', bgColor: 'rgba(207, 100, 154,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/sass-1.svg' },
  { name: 'HTML', bgColor: 'rgba(227, 79, 38,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/html-1.svg' },
  { name: 'CSS', bgColor: 'rgba(27, 115, 186,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/css-3.svg' },
  { name: 'JQuery', bgColor: 'rgba(107, 160, 171,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/jquery-2.svg' },
  { name: 'Dart', bgColor: 'rgba(0, 121, 179,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/dart.svg' },
  // Add more skill objects here
];
const back = [
    { name: 'NodeJS', bgColor: 'rgba(146, 200, 80,0.25)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/15cfca692359a7ff8a7940e5ecb6d08a30cdb187/public/assets/svgs/nodejs.svg' },
    { name: 'C#', bgColor: 'rgba(53, 10, 144,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/c--4.svg' },
    { name: 'C++', bgColor: 'rgba(33, 91, 141,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/c.svg' },
    { name: 'Python', bgColor: 'rgba(59, 109, 152,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/python-5.svg' },
    { name: 'Matlab', bgColor: 'rgba(240, 115, 66,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/matlab.svg' },
  ];

  const tools = [
      { name: 'Figma', bgColor: 'rgba(61, 208, 133,0.15)', imgPath: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' },
      { name: 'Unity', bgColor: 'rgba(35, 44, 55,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/unity-69.svg' },
      { name: 'Copilot', bgColor: 'rgba(0, 0, 0,0.15)', imgPath: 'https://github.com/ToniRajamaki/folio2/blob/main/public/assets/svgs/copilot.png?raw=true' },
      { name: 'ChatGPT4', bgColor: 'rgba(121, 171, 156,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/chatgpt-4.svg' },
      { name: 'Photoshop', bgColor: 'rgba(63, 171, 254,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/adobe-photoshop-2.svg' },
      { name: 'SourceTree', bgColor: 'rgba(46, 136, 253,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/sourcetree-1.svg' },
      { name: 'Fast Keys', bgColor: 'rgba(196, 37, 115,0.15)', imgPath: 'https://www.techspot.com/images2/downloads/topdownload/2022/12/2022-12-28-ts3_thumbs-26a.png' },
      { name: 'PremierePro', bgColor: 'rgba(223, 121, 253,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/premiere-cc.svg' },
      { name: 'Miro', bgColor: 'rgba(253, 206, 56,0.25)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/miro.svg' },
      { name: 'Gimp', bgColor: 'rgba(91, 85, 69,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/4530467e93fcd59217997fb89ab39ff9cc2b1f90/public/assets/svgs/The_GIMP_icon_-_gnome.svg' },
  ];
  const ui_icon = <i className='bx bxs-palette icon2' style={{ color: "#9251F7" }}></i>;

function Skills2({ theme }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Enhanced function to handle mouse enter with larger and more varied rotation angles
  const handleMouseEnter = (e, bgColor) => {
    // Generate larger and more varied random rotation angles with higher minimum values
    const rotateX = Math.floor(Math.random() * 40) - 20; // Random rotateX between -20 and 20
    const rotateY = Math.floor(Math.random() * 40) - 20; // Random rotateY between -20 and 20
    const perspective = 600; // Perspective distance

    e.currentTarget.style.backgroundColor = bgColor;
    e.currentTarget.style.border = `1px solid ${bgColor}`;
    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
    e.currentTarget.style.color = '#000';
    e.currentTarget.style.fontWeight = 'bold';
    // Apply enhanced 3D transformation
    e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Function to handle mouse leave
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = ''; // Reset to original or specify a default color
    e.currentTarget.style.border = "none";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.color = ''; // Reset to original or specify a default color
    e.currentTarget.style.fontWeight = ''; // Reset to original or specify a default font weight
    e.currentTarget.style.transform = ''; // Reset transformation
  };

  return (
    <div id={theme}>
      <>
      <div className="cover"></div>
      <section className="skills section container" id="skills">
        <h2 className="section__title ">Skills</h2>
        <span className="section__subtitle small_margin_bottom">My technical level</span>
  
        <div className='skills2-container'>
          {/* Front-end Section */}
          <div className='skills-section-container'>
            <p data-aos="fade-right" className='skills-header'>💻Front-end</p>
            <div className="skills-container" data-aos="fade-right">
              {front.map((skill, index) => (
                <div className="skill-tag" key={index}
                onMouseEnter={(e) => handleMouseEnter(e, skill.bgColor)}
                onMouseLeave={handleMouseLeave}>
                  <div className="image-bg" style={{ backgroundColor: skill.bgColor }}>
                    <img src={skill.imgPath} alt={skill.name} className="skill-image" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Back-end Section */}
          <div className='skills-section-container'>
            <p data-aos="fade-left" className='skills-header'>📊Back-end</p>
            <div className="skills-container" data-aos="fade-left">
              {back.map((skill, index) => (
                <div className="skill-tag" key={index}
                onMouseEnter={(e) => handleMouseEnter(e, skill.bgColor)}
                onMouseLeave={handleMouseLeave}>
                  <div className="image-bg" style={{ backgroundColor: skill.bgColor }}>
                    <img src={skill.imgPath} alt={skill.name} className="skill-image" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Tools Section */}
          <div className='skills-section-container'>
            <p data-aos="fade-right" className='skills-header'>🛠️Tools</p>
            <div className="skills-container" data-aos="fade-right">
              {tools.map((skill, index) => (
                <div className="skill-tag" key={index}
                onMouseEnter={(e) => handleMouseEnter(e, skill.bgColor)}
                onMouseLeave={handleMouseLeave}>
                  <div className="image-bg" style={{ backgroundColor: skill.bgColor }}>
                    <img src={skill.imgPath} alt={skill.name} className="skill-image" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" >
              <TagComponent
                tags={["UI Design", "Visual Design", "UX Design", "Testing", "Interaction Design", "Accessability", "Prototyping", "Web/Mobile Design", "Agile Development", "AR/VR Design", "User Research", "Wireframing", "Human-Centered Design"]}
                heading='UI/UX Skills'
                color="#9251F7"
                icon={ui_icon}
                ></TagComponent>
            </div>  
        </div>
      </section>
                </>
    </div>
  );
  
}

export default Skills2;