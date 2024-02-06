import React from 'react';
import '../styles/skills2.css';

// Array of skill objects
const skills = [
  { name: 'React', bgColor: 'rgba(110, 220, 250,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/react-2.svg' },
  { name: 'TypeScript', bgColor: 'rgba(0, 122, 204,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/typescript.svg' },
  { name: 'JavaScript', bgColor: 'rgba(240,219,79,0.25)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/logo-javascript.svg' },
  { name: 'Bootstrap', bgColor: 'rgba(86, 61, 124,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/bootstrap-4.svg' },
  { name: 'HTML', bgColor: 'rgba(227, 79, 38,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/html-1.svg' },
  { name: 'CSS', bgColor: 'rgba(27, 115, 186,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/css-3.svg' },
  { name: 'SASS', bgColor: 'rgba(207, 100, 154,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/sass-1.svg' },
  { name: 'JQuery', bgColor: 'rgba(107, 160, 171,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/jquery-2.svg' },
  { name: 'Dart', bgColor: 'rgba(0, 121, 179,0.15)', imgPath: 'https://raw.githubusercontent.com/ToniRajamaki/folio2/1d016a0c8028e82c7398f756a18538a59a5a7fbf/public/assets/svgs/dart.svg' },
  // Add more skill objects here
];

function Skills2() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-tag" key={index}>
          <div className="image-bg" style={{ backgroundColor: skill.bgColor }}>
            <img src={skill.imgPath} alt={skill.name} className="skill-image" />
          </div>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills2;
