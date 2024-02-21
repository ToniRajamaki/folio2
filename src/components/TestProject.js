import React from 'react';
import TableOfContents from './TableOfContents'; // Ensure this path matches where you save the TOC component
import '../styles/TestProject.css'; // Adjust this path to your CSS file for TestProject

// Placeholder image URLs - replace these with your actual image paths
const IMAGES = [
    'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-1.png?raw=true',
    'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-2.png?raw=true',
    'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-3.png?raw=true',
    'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section.png?raw=true',
  ]

// Generate IDs for images to use with the Table of Contents
const imageIds = IMAGES.map((_, index) => `image-${index}`);

function TestProject() {
  return (
    <div>
      <li className='nav__item'>
        <a href='http://localhost:3000/folio2/#home'>
          <img
            className='nav__logo'
            src='https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true'
            alt='Logo'
          />
        </a>
      </li>
      {/* <h1 className='section__title'>Test Project</h1>
      <span className="section__subtitle">This is maybe the coolest project ever</span> */}

      {/* Dynamic Table of Contents */}
      <TableOfContents imageIds={imageIds} />

      <div className='image-container2'>
        {IMAGES.map((image, index) => (
          <img key={index} src={image} alt={`Section ${index + 1}`} id={imageIds[index]} />
        ))}
      </div>
            <br />
      <div className="project-footer">
        <a href='http://localhost:3000/folio2/#portfolio'>
          <h4 className='section__subtitle'>BACK TO PROJECTS</h4>
        </a>
      </div>
    </div>
  );
}

export default TestProject;
