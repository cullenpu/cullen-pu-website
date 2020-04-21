import React from "react";

import "./projectCardStyles.css";

const ProjectButton = ({ link, site }) => {
  if (link) {
    return (
      <a
        href={link}
        className="project-btn btn btn-outline-secondary btn-sm text-monospace"
        target="_blank"
        rel="noopener noreferrer"
      >
        {site}
      </a>
    );
  } else {
    return null;
  }
};

const ProjectCard = ({ src, name, subtitle, description, github, devpost }) => {
  return (
    <div className="card mb-4">
      <img className="card-img-top" src={src} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle text-secondary mb-2">{subtitle}</h6>
        <p className="card-text">{description}</p>
        <ProjectButton link={github} site="github" />
        <ProjectButton link={devpost} site="devpost" />
      </div>
    </div>
  );
};

export default ProjectCard;
