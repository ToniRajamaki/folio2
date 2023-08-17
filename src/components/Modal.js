import React from 'react'
import '../styles/modal.css'
import DemoCarousel from './DemoCarousel'
import TestimonialCarousel from './TestimonialCarousel'
const images = [
  './folio2/assets/toni/logo.png',
  './folio2/assets/toni/profile_picture.png',
  './folio2/assets/toni/atria.png',
]
const github_icon = (
  <i
    class='bx bxl-github'
    style={{ color: '#516CF7', fontSize: 'x-large' }}
  ></i>
)
// const github_icon = <i className='uil uil-arrow icon' style={{ color: "#516CF7" }}></i>;
const externalLink_icon = (
  <i class='bx bx-link-external' style={{ fontSize: 'x-large' }}></i>
)
const close_icon = <i  class='bx bx-x-circle'
style={{ color: '#516CF7', fontSize: '2.5rem' }}></i>
const Modal = ({
  onClose,
  projectTitle = 'Default Project Title',
  tags = [],
  featureDescriptions = [],
  image = 'https://rawcdn.githack.com/TeeeJaey/PortFolio/9c2209be855bde844d2b55834e608538c1df7682/src/images/MernPos.png',
}) => {
  return (
    <div className='fullscreen-modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='project-title'>{projectTitle}</h1>
          <div className='buttons-container'>
            <button className='modal-close-button' onClick={onClose}>
            {close_icon}
            </button>
          </div>
        </div>
        <div className='modal-body'>
          <div className="carousel-container">

          <TestimonialCarousel theme='light' testimonials={images} />
          </div>
          <p>
            Description: This is the modal content. You can put any information
            here.
          </p>
          <h4>Features:</h4>
          <div className='feature-list'>
            {featureDescriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>
        <div className='modal-footer'>
          <button className='demo button'> {externalLink_icon} Demo</button>
          <button className='code button'>{github_icon} Code</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
