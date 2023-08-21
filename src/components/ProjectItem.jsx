import React, { useState } from 'react';
import "../styles/work.css";
import Modal from './Modal';

const ProjectItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => setShowModal(true)} className="project__card" key={item.id}>
      <div className="project__img">

      <img src={item.images[0]} alt="project_item_image" className="project__img" />
      </div>
      <h3 className="project__title">{item.title}</h3>

      {/* Tags */}
        <div className="project__button">
      <div className="project__tags">
        {item.tags && item.tags.map((tag, index) => (
          <span key={index} className='project__tag'>
            {tag}
          </span>
        ))}
      </div>

      {/* Button to open the modal */}
      </div>
      <div>

        <button onClick={() => setShowModal(true)} className="code button">
          View <i className="bx bx-right-arrow-alt project__button-icon"></i>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          projectTitle={item.title}
          features={item.features || ["Nope"]}
          images={item.images || []}
          description={item.description || "Default description"}
          tags={item.tags || ["Nope"]}
          item={item}
        />
      )}
    </div>
  );
};

export default ProjectItem;
