import React from 'react';

export default function ProjectCard(props) {
  return (
    <div className="projects-card">
      <div className="media">
        <div className="media-body">
          <h3 className="media-heading">{props.name}</h3>
          <h5>{props.lang}</h5>
          <p>{props.description}</p>
          <a href={props.projectLink}>
            <span className="ti-github"></span> Code
          </a>
        </div>
      </div>
    </div>
  );
}
