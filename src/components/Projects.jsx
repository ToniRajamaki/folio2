import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './DataWork'; // Make sure to import projectsNav too
import ProjectItem from './ProjectItem';
import "../styles/work.css";

const Projects = ({ theme }) => {
  const [selectedItem, setSelectedItem] = useState({ name: "all" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selectedItem.name === "all") {
      setFilteredProjects(projectsData);
    } else {
      const newFilteredProjects = projectsData.filter((project) => {
        return (
          project.category.includes(selectedItem.name) 
        );
      });
      setFilteredProjects(newFilteredProjects);
    }
  }, [selectedItem]);

  const handleItemClick = (e, index) => {
    setSelectedItem({ name: e.target.textContent.toLowerCase() });
    setActiveIndex(index);
  };

  return (
    <div id={theme}>
      {/* Filter items */}
      {/* <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            className={`${
              activeIndex === index ? "active-work" : ""
            } work__item2 `}
            onClick={(e) => handleItemClick(e, index)}
          >
            {item.name}
          </span>
        ))}
      </div> */}



      <div className="flex flex-wrap flex-row gap-6 justify-center align-center content-center">
        {filteredProjects.map((project) => (
          <ProjectItem item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
