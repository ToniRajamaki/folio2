import React from 'react'
import '../styles/modal.css'
import DemoCarousel from './DemoCarousel'
import TestimonialCarousel from './TestimonialCarousel'
import Carousel from './Carousel'
import TagComponent from './TagComponent'
const images = [
  './folio2/assets/toni/logo.png',
  './folio2/assets/toni/profile_picture.png',
  './folio2/assets/toni/atria.png',
]
const check_icom=<i className="bx bx-badge-check"  style={{ color: '#516CF7', fontSize: 'x-large'}}></i>
const github_icon = (
  <i
    class='bx bxl-github'
    style={{ color: '#516CF7', fontSize: 'x-large' }}
  ></i>
)
// const github_icon = <i className='uil uil-arrow icon' style={{ color: "#516CF7" }}></i>;
const externalLink_icon = (
  <i class='bx bx-link-external' style={{ fontSize: 'x-large', }}></i>
)
const close_icon = <i  class='bx bx-x-circle'
style={{ color: '#516CF7', fontSize: '2.5rem' }}></i>
const Modal = ({
  onClose,
  projectTitle = 'Default Project Title',
  tags = [],
  featureDescriptions = [],
  image = 'https://rawcdn.githack.com/TeeeJaey/PortFolio/9c2209be855bde844d2b55834e608538c1df7682/src/images/MernPos.png',
  description
}) => {
  return (
    <div className='fullscreen-modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1 className='project-title'>{projectTitle}</h1>
          <div className="footer-tags">
              <span className='tag tag-design-12'>C++</span>
              <span className='tag tag-design-12'>React</span>
              <span className='tag tag-design-12'>JavaScript</span>
          </div>
          <div className='buttons-container'>
            <button className='modal-close-button' onClick={onClose}>
            {close_icon}
            </button>
          </div>
        </div>
        <div className='modal-body'>
          <div className="line"> </div>
          <div className="carousel-container">

          <Carousel theme='light' testimonials={images} />
          </div>
          <div className="modal-description">

{/* <p> */}
 {description}
{/* </p> */}
</div>
          <h3>Features:</h3>
          <div className='feature-list'>
            {featureDescriptions.map((feature, index) => (
              <p key={index}>
                 <div className="skills__data modal-feature">
              {check_icom}

            <div>
              <h3 className="skills__name">{feature}</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div></p>
            ))}
          </div>
            {/* <div className="line"></div> */}
       
        <div className='modal-footer'>
         
          <div className='footer_buttons'>

            <button className='demo button'> {externalLink_icon} Demo</button>
            <button button className='code button'>{github_icon} Code</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
