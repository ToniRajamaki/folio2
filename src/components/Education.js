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
    <div id='light'>
      <section className='about section ' id='about'>
        <h2 className='section__title'>Education</h2>
        <span className='section__subtitle'>My Degrees</span>
        <div className='cards-container container grid' data-aos='fade-up'>
          <div className='card'>
            <EducationCard
              schoolName='Tampere University'
              degree='Human-Technology Interaction (MSc Tech)'
              duration='2018-2023'
              description='Long Major: Human-Technology Interaction'
              imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOseqgHwSg_KeYaOXu4-xQr_ZDTF98GJmTg&usqp=CAU'
            ></EducationCard>
          </div>
          <div className='card'>
            <EducationCard
              schoolName='Tampere University'
              degree='Human-Technology Interaction (MSc Tech)'
              duration='2018-2023'
              description='Long Major: Human-Technology Interaction'
              imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOseqgHwSg_KeYaOXu4-xQr_ZDTF98GJmTg&usqp=CAU'
            ></EducationCard>
          </div>
          <div className='card'>
            <EducationCard
              schoolName='Tampere University'
              degree='Human-Technology Interaction (MSc Tech)'
              duration='2018-2023'
              description='Long Major: Human-Technology Interaction'
              imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOseqgHwSg_KeYaOXu4-xQr_ZDTF98GJmTg&usqp=CAU'
            ></EducationCard>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
