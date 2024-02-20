import React, { useRef, useEffect, useState } from 'react'
import '../styles/modal.css'
import Carousel from './Carousel'
import TagComponent from './TagComponent'
// const images = [
//   './folio2/assets/toni/logo.png',
//   './folio2/assets/toni/profile_picture.png',
//   './folio2/assets/toni/atria.png',
// ]
const check_icom = (
  <i
    className='bx bx-badge-check'
    style={{ color: '#516CF7', fontSize: 'x-large' }}></i>
)
const github_icon = (
  <i
    class='bx bxl-github'
    style={{ color: '#516CF7', fontSize: 'x-large' }}></i>
)
// const github_icon = <i className='uil uil-arrow icon' style={{ color: "#516CF7" }}></i>;
const externalLink_icon = (
  <i class='bx bx-link-external' style={{ fontSize: 'x-large' }}></i>
)
const close_icon = (
  <i
    class='bx bx-x-circle'
    style={{ color: '#516CF7', fontSize: '2.5rem' }}></i>
)

const ModalContent = ({
  projectTitle = 'Default Project Title',
  tags = [],
  features = [],
  images = [],
  description,
  codeURL,
  demoURL,
}) => {
  const check_icon = (
    <i
      className='bx bx-badge-check'
      style={{ color: '#516CF7', fontSize: 'x-large' }}></i>
  )
  const github_icon = (
    <i
      className='bx bxl-github'
      style={{ color: '#516CF7', fontSize: 'x-large' }}></i>
  )
  const externalLink_icon = (
    <i className='bx bx-link-external' style={{ fontSize: 'x-large' }}></i>
  )
  const close_icon = (
    <i
      className='bx bx-x-circle'
      style={{ color: '#516CF7', fontSize: '2.5rem' }}></i>
  )

  return (
    <div className='modalContent'>
          <div className='modal-header'>
            <h1 className='project-title'>{projectTitle}</h1>
            <div className='footer-tags'>
              {tags.map((tag, index) => (
                <span key={index} className='tag tag-design-12'>
                  {tag}
                </span>
              ))}
            </div>
            <div className='buttons-container'>
            </div>
          </div>
          <div className='modal-body'>
            <div className='line'></div>
            {
              <div className='feature-list'>
                {features.map((feature, index) => (
                  <div key={index} className='skills__data modal-feature'>
                    {check_icon}
                    <div>
                      <h3 className='skills__name'>{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            }
            <div className='carousel-container'>
              <Carousel theme='light' images={images} />
            </div>
            {/* Features */}
            {/* <h3>Features:</h3> */}
            {/* Description */}
            <div className='modal-description'>{description}</div>
            <div className='line'></div>
            <div className='modal-footer'>
              <div className='footer_buttons'>
                {/* Only show the button and link if demoURL is not null */}
                {demoURL && (
                  <a href={demoURL} target='_blank'>
                    <button className='demo button'>
                      {externalLink_icon} Live Demo
                    </button>
                  </a>
                )}

                {/* Only show the button and link if codeURL is not null */}
                {codeURL && (
                  <a href={codeURL} target='_blank'>
                    <button className='code button'>{github_icon} Code</button>
                  </a>
                )}
              </div>
            </div>
          </div>
    </div>
  )
}

export default ModalContent;
