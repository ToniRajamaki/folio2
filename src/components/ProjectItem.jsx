import React, { useState } from 'react';
import "../styles/work.css";
import "react-responsive-modal/styles.css";

const ProjectItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  const github_icon = (
    <i className='bx bxl-github' style={{ fontSize: 'x-large' }}></i>
  );

  const externalLink_icon = (
    <i className='bx bx-link-external' style={{ fontSize: 'x-large' }}></i>
  );

  if (!item || !item.images || !item.title || !item.description) {
    return null;
  }

  return (
    <div
      className="relative project__card justify-self-center align-self-center overflow-hidden drop-shadow"
      style={{ backgroundImage: `url(${item.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute bottom-0 left-0 bg-black bg-opacity-75 flex flex-col justify-start items-start text-white p-4 w-full transition-transform duration-200 ease-in-out transform ${hover ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
        <p className="text-sm mb-4 text-white">{item.description.split(' ').slice(0, 10).join(' ')}</p>
        <div className="flex space-x-4 align-center justify-center">
          {item.demoURL && (
            <a href={item.demoURL} target="_blank" rel="noopener noreferrer">
              <button className="demo button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                {externalLink_icon} DEMO
              </button>
            </a>
          )}
          {item.codeURL && (
            <a href={item.codeURL} target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent hover:bg-opacity-30 border border-white bg-white bg-opacity-50 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                {github_icon} Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
