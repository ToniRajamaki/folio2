import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function ServiceCard({ modal_description, icon, title, items }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
    setIsFlipped(true);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsFlipped(false);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className='service-card-wrapper' onClick={handleCardClick}>
        <div onClick={handleContentClick} className='services__content'>
          <div>
            {icon}
            <h3 className='services__title'>{title}</h3>
          </div>
          <span onClick={handleContentClick} className='services__button'>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
        </div>
      </div>

      <div
        className={
          isFlipped
            ? 'services__modal active-modal'
            : 'services__modal'
        }
      >
        <div className='services__modal-content' onClick={handleCloseClick}>
          <i
            className='uil uil-times services__modal-close'
            onClick={handleCloseClick}
          ></i>
          <h3 className='services__modal-title'> {title}</h3>
          <p className='services__modal-description'>{modal_description}</p>

          <ul className='services__modal-services grid'>
            {items.map((item, index) => (
              <li key={index} className='services__modal-service'>
                <i className='uil uil-check-circle service__modal-icon'></i>
                <p className='services__modal-info'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default ServiceCard;
