import React, { useState } from 'react';
import "../styles/work.css";
import { Modal } from 'react-responsive-modal';
import ModalContent from './Modal'; // Ensure this import matches the exported component name
import "react-responsive-modal/styles.css";

const ProjectItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <>
    <div className="project__card" onClick={toggleModal}>
      <div className="project__img">
        <img src={item.images[0]} alt="project_item_image" className='project__img' />
      </div>
      <div className='title_and_tags'>
        <h3 className="project__title">{item.title}</h3>
        <div className="project__tags">
          {item.tags && item.tags.map((tag, index) => (
            <span key={index} className='project__tag'>{tag}</span>
            ))}
        </div>
      </div>
            </div>
            <>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)} center>
          <div>

          <ModalContent 
          projectTitle={item.title}
          tags={item.tags || ["Nope"]}
          features={item.features || ["Nope"]}
          images={item.images || []}
          description={item.description || "Default description"}
          codeURL={item.codeURL}
          demoURL={item.demoURL}
          />
          </div>
        </Modal>
      )}
    </>
      </>
  );
};

export default ProjectItem;
