import React, { useState } from 'react';
import "../styles/work.css";
import Modal from './Modal';

const ProjectItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const defaultFeatureDescriptions = [
    "Easy of use",
    "Delightful UX",
    "Infromative",
  ];
  const techTags = [
    "JavaScript",
    "React",
  ];

  return (
    <div className="project__card" key={item.id}>
      <img src={item.images[0]} alt="project_item_image" className="project__img" />
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
          images={item.images}
          description={item.description || "Default description"}
          techTags={techTags}
        />
      )}
    </div>
  );
};

export default ProjectItem;
