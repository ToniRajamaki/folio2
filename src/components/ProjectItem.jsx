import React, { useEffect, useState } from 'react';
import "../styles/work.css";
import Modal from './Modal';

const ProjectItem = ({ item }) => {
  // State to track whether the video should be displayed
  const [showVideo, setShowVideo] = useState(false);

  // This effect could potentially be used for something related to 'item.video'
  useEffect(() => {
    // Add any relevant code here if needed
  }, [item.video]);

  return (
    <div className="project__card" key={item.id}>
      {/* Display the project image */}
      <img src={item.image} alt="project_item_image" className="project__img" />

      {/* Display the project title */}
      <h3 className="project__title">{item.title}</h3>

      {/* Conditional rendering for the video */}
      {showVideo && (
        <>
          <div className="video__container">
            <video
              className="video"
              controls
              autoPlay
              poster="vignette.jpg"
            >
              <source src={item.video} type="video/webm" />
            </video>
          </div>
          <span
            className="close__video"
            onClick={() => setShowVideo(false)}
          >
            X
          </span>
        </>
      )}

      {/* Button to toggle video display */}
      <span onClick={() => setShowVideo(true)} className="project__button">
        Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </span>
    </div>
  );
}

export default ProjectItem;
