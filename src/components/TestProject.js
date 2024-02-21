import React from 'react'
import "../styles/TestProject.css"

const IMAGES = [
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-1.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-2.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section-3.png?raw=true',
  'https://github.com/ToniRajamaki/Ezprojects/blob/main/sandbox/public/TestProjectImages/Section.png?raw=true',
]

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
        <h1 className='section__title'>Test Project</h1>
        <span className="section__subtitle">This is maybe the coolsest project ever</span>
    <div className='image-container2'>
        {IMAGES.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} id={index} />
        ))}
    </div>

            <div className="project-footer">
            <a href='http://localhost:3000/folio2/#home'>
                <p className='section__subtitle'>BACK home</p>
            </a>
            </div>


    </div>
  )
}

export default TestProject
