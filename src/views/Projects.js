import React from 'react';

import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="container">
      <div className="row me-row schedule" id="schedule">
        <h2 className="row-title content-ct">Projects from Github</h2>
        <div className="wrapper">
          <div className="tab-content ">
            <div role="tabpanel" className="tab-pane fade in active" id="day-1">
              <div className="row" id="projects-main">
                <ProjectCard
                  name={'repo name'}
                  lang={'programming langue'}
                  description="project lorem ipsum dolor sit amuse ipsum sit aume smues description"
                  projectLink="https://somethingsomewhare.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
