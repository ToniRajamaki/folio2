import React from 'react';
import "../styles/modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="fullscreen-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Modal Title</h3>
        </div>
        <div className="modal-body">
          <p>This is the modal content. You can put any information here.</p>
        </div>
        <div className="modal-footer">
          <button className="modal-close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
