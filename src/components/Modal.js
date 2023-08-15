import React from 'react'
import '../styles/modal.css'
import DemoCarousel from './DemoCarousel'

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
          <h3 className='project-title'>{projectTitle}</h3>
          <div className='buttons-container'>
            <button className='demo-button'>Demo</button>
            <button className='code-button'>Code</button>
            <button className='modal-close-button' onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <div className='modal-body'>
          {/* <img className='modal_img' src={image} alt='Project' /> */}
          <DemoCarousel></DemoCarousel>
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
          <p>this is footer</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
