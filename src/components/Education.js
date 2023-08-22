import React from 'react'
import EducationCard from './EducationCard'
import ed from '../styles/EducationCard.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../styles/skills.css'

function Education() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div
      style={{
        height: '80vh', // Set a fixed height for the parent div
        backgroundImage: `url('https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/tau.png?raw=true')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          // backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%', // Make sure the inner content fills the parent's fixed height
        }}
      >
        <section className='about section ' id='about'>
          <h2 className='section__title'>Education</h2>
          <span className='section__subtitle'>My Degrees</span>
          <div className='cards-container container grid2' data-aos='fade-up'>
            <a href='https://www.tuni.fi/en/study-with-us/human-technology-interaction-computing-sciences'>
              <div className='card'>
                <EducationCard
                  schoolName='Tampere University'
                  degree={`Human-Technology Interaction
                  Master's Degree (Tech)`}
                  duration='2021-2023'
                  description='• Long Major: Human-Technology Interaction'
                  imageSrc='https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/tau_logo.png?raw=true'
                />
              </div>
            </a>
            <a href='https://ahlmanedu.fi/'>
              <div className='card'>
                <EducationCard
                  schoolName='AhlmanEdu'
                  degree='Professional Entrepreneurship Diploma'
                  duration='2021 - 2022'
                  description={`• Business operations development
                • Productization, Sales & Marketing`}
                  imageSrc='https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/ahlman.png?raw=true'
                />
              </div>
            </a>
            <a href='https://www.tuni.fi/en/about-us/computing-sciences#switcher-trigger-overview'>
              <div className='card'>
                <EducationCard
                  schoolName='Tampere University'
                  degree={`Computing Sciences
                  Bachelor's Degree`}
                  duration='2018-2021'
                  description={`• Major: Signal Processing
                • Minor: Industrial Economics`}
                  imageSrc='https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/tau_logo.png?raw=true'
                />
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Education
