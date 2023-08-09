import React from 'react'
import PropTypes from 'prop-types'
import ed from "../styles/EducationCard.css"// You can define your styles in a separate CSS file

const EducationCard = ({
  schoolName,
  degree,
  duration,
  description,
  imageSrc,
}) => {
  return (
    // this is a  good option
  //   <div className='education-card'>
  //   <div className='image-container'>
  //     <div className='background-overlay'></div>
  //     <img src={imageSrc} alt={schoolName} className='rounded-image' />
  //   </div>
  //   <div className='content-container'>
  //     <h2 className='school-name'>{schoolName}</h2>
  //     <div className='education-details'>
  //       <h3 className='degree'>{degree}</h3>
  //       <p className='duration'>{duration}</p>
  //       <br />
  //       <p className='description'>{description}</p>
  //     </div>
  //   </div>
  // </div>

  <div className='education-card'>
  <div className='image-container'>
    <div className='background-overlay'></div>
    <img src={imageSrc} alt={schoolName} className='rounded-image' />
  </div>
  <div className='content-container'>
    <h2 className='school-name'>{schoolName}</h2>
    <div className='degree-container'>
      <h3 className='degree'>{degree}</h3>
    </div>
    <p className='duration'>{duration}</p>
    <br />
    <p className='description'>{description}</p>
  </div>
</div>

  

  )
}

EducationCard.propTypes = {
  schoolName: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default EducationCard
