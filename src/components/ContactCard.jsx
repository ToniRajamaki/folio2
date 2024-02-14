import React, { useState } from 'react';
import "../styles/contact.css";

const ContactCard = () => {
  const email = "zingoo16@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (e) => {
    alert("✉️Email:  zingoo16@gmail.com copied to clipboard✅");
    e.preventDefault();
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500); // Revert back after 1.5 seconds
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
  };

  return (
    <div className="contact__card" onClick={copyToClipboard}>
      <i className="bx bx-mail-send contact__card-icon"></i>
      <h3 className="contact__card-title">Email</h3>
      <span className="contact__card-data">
        {email}
      </span>
      <a className={`contact__button ${isCopied ? 'copied' : ''}`}>
        {isCopied ? "Copied" : "Click to Copy Email"} 
        {isCopied ? <i className='bx bx-check-circle copied-icon'></i> : <i className='bx bx-copy'></i>}
      </a>
    </div>
  );
};

export default ContactCard;
