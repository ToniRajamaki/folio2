import React from 'react';
import PropTypes from 'prop-types';
import "../styles/EducationCard.css"; // Correctly import your CSS file

const EducationCard = ({ schoolName, degree, duration, description, imageSrc }) => {
  return (
    <div className='education-card'>
      <div className='image-container'>
        <img src={imageSrc} alt={`${schoolName} logo`} className='rounded-image' />
      </div>
      <div className='content-container'>
        <h1 className='school-name'>{schoolName}</h1>
        <div className='degree-container'>
          <h2 className='degree'>{degree}</h2>
        </div>
      </div>
      <div className='description-container'>
        <div className='duration'>{duration}</div>
        <div className='description'>{description}</div>
      </div>
    </div>
  );
}

// Define PropTypes for component props validation
EducationCard.propTypes = {
  schoolName: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default EducationCard;
