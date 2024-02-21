import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/tableOfContents.css'; // Assume you have this CSS file for TOC styles

const TableOfContents = ({ imageIds }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Option to ensure that the link becomes active when the image is in the viewport.
      { rootMargin: '-50% 0% -50% 0%' }
    );

    imageIds.forEach(id => {
      const img = document.getElementById(id);
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, [imageIds]);

  return (
    <nav className="toc-nav">
      <ul className="toc-list">
        {imageIds.map(id => (
          <li key={id} className="toc-item">
            <Link
              to={id}
              spy={true}
              smooth={true}
              duration={0}
              className={activeId === id ? 'toc-link active' : 'toc-link'}
            >
              {`Section ${id}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
