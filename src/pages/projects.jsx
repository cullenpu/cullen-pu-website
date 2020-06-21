import React from "react";

import ProjectCard from "../components/ProjectCard";
import "./styles.css";
import projectsText from "../resources/json/projects/projectsText.json";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="section text-center">projects</h1>
      <div className="project-column pr-3">
        <ProjectCard {...projectsText.items[0]} />
      </div>
      <div className="project-column pl-3">
        <ProjectCard {...projectsText.items[1]} />
        <ProjectCard {...projectsText.items[2]} />
      </div>
    </div>
  );
};

export default Projects;
