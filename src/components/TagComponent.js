import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/TagComponent.css';

const TagComponent = ({ tags, heading, color, icon }) => {
  const [renderedTags, setRenderedTags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < tags.length) {
      const timeout = setTimeout(() => {
        setRenderedTags(prevRenderedTags => [...prevRenderedTags, tags[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 150); // Adjust delay time

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, tags]);

  const tagStyle = {
    color: color,
    borderColor: color,
    transition: 'opacity 0.3s ease-in-out', // Opacity transition
  };

  return (
    <div>
      <div className='pair'>
        {icon}
        <h2 style={tagStyle}>{heading}</h2>
      </div>

      <div className='tags'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='tag tag-design-12'
            style={{ ...tagStyle, opacity: renderedTags.includes(tag) ? 1 : 0 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

TagComponent.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.node,
};

TagComponent.defaultProps = {
  color: '#516CF7',
};

export default TagComponent;
