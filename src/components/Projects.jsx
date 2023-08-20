import React, { useEffect, useState } from 'react';
import { projectsData } from './DataWork';
import { projectsNav } from './DataWork';
import ProjectItem from './ProjectItem';
import "../styles/work.css";

const Projects = ({ theme }) => {
  // State for the selected filter item and projects list
  const [selectedItem, setSelectedItem] = useState({ name: "all" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the projects list when the selected item changes
  useEffect(() => {
    if (selectedItem.name === "all") {
      setFilteredProjects(projectsData);
    } else {
      const newFilteredProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === selectedItem.name;
      });
      setFilteredProjects(newFilteredProjects);
    }
  }, [selectedItem]);

  // Handle the filter item click and update the selected item and active index
  const handleItemClick = (e, index) => {
    setSelectedItem({ name: e.target.textContent.toLowerCase() });
    setActiveIndex(index);
  };

  return (
    <div>
      {/* Filter items */}
      <div className="work__filters">
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
      </div>

      {/* Display filtered projects */}
      <div className="work__container container3 grid2">
        {filteredProjects.map((project) => (
          <ProjectItem item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
