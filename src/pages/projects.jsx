import React from "react";

import ProjectCard from "components/ProjectCard";
import "./styles.css";
import projectsText from "resources/json/projects/projectsText.json";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="section text-center">projects</h1>
      <div className="project-column pr-3">
        <ProjectCard {...projectsText["politician-game"]} />
      </div>
      <div className="project-column pl-3">
        <ProjectCard {...projectsText["simplemlp"]} />
        <ProjectCard {...projectsText["arctic-miner"]} />
        <ProjectCard {...projectsText["meal-prep-4-u"]} />
      </div>
    </div>
  );
};

export default Projects;
