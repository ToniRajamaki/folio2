import React from 'react'
import PropTypes from 'prop-types'
import '../styles/TagComponent.css'

const TagComponent = ({ tags, heading, color,icon }) => {
  const tagStyle = {
    color: color,
    borderColor: color,
  }

  return (
    <div>
      <div className='pair'>
        {/* <i class='bx bxs-palette icon2' style={tagStyle}> </i> */}
        {icon}
        <h2 style={tagStyle}>{heading}</h2>
      </div>

      <div className='tags'>
        {tags.map((tag, index) => (
          <span key={index} className='tag tag-design-12' style={tagStyle}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

TagComponent.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  color: PropTypes.string, // New prop for text and border color
}

TagComponent.defaultProps = {
  color: '#516CF7', // Default value for color prop
}

export default TagComponent
