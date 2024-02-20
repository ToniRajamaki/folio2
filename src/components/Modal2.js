import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const CustomModal = ({
  open,
  onClose,
  projectTitle = 'Default Project Title',
  tags = [],
  features = [],
  images = [],
  description,
  codeURL,
  demoURL
}) => {
  const check_icon = (
    <i
      className='bx bx-badge-check'
      style={{ color: '#516CF7', fontSize: 'x-large' }}
    ></i>
  );
  const github_icon = (
    <i
      className='bx bxl-github'
      style={{ color: '#516CF7', fontSize: 'x-large' }}
    ></i>
  );
  const externalLink_icon = (
    <i className='bx bx-link-external' style={{ fontSize: 'x-large' }}></i>
  );
  const close_icon = (
    <i
      className='bx bx-x-circle'
      style={{ color: '#516CF7', fontSize: '2.5rem' }}
    ></i>
  );

  return (
    <Modal open={open} onClose={onClose} center>
      <h1>title</h1>
    <p>Content</p>
    </Modal>
  );
};

export default CustomModal;
