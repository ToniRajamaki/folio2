import React, { useState } from 'react';
import "../styles/work.css";
import Modal from './Modal';

const ProjectItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const defaultFeatureDescriptions = [
    "Default feature 1",
    "Default feature 2",
    "Default feature 3",
  ];

  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="project_item_image" className="project__img" />
      <h3 className="project__title">{item.title}</h3>

      {/* Button to open the modal */}
      <div className="project__button">

      <button onClick={() => setShowModal(true)} className="code button">
        View <i className="bx bx-right-arrow-alt project__button-icon"></i>

      </button>
      </div>
      {/* Modal */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          projectTitle={item.title}
          featureDescriptions={item.features || defaultFeatureDescriptions}
          image={item.image}
          description={item.description || "Default description"}
        />
      )}
    </div>
  );
};

export default ProjectItem;
