import React, { useState } from 'react'

function ServiceCard({ modal_description, icon, title, items }) {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (i) => {
    setToggleState(i)
  }

  return (
    <div className='services__content'>
      <div>
        {icon}
        <h3 className='services__title'>{title}</h3>
      </div>
      <span onClick={() => toggleTab(1)} className='services__button'>
        View More
        <i className='uil uil-arrow-right services__button-icon'></i>
      </span>
      <div
        className={
          toggleState === 1 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            className='uil uil-times services__modal-close'
            onClick={() => toggleTab(0)}
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
    </div>
  )
}

export default ServiceCard
