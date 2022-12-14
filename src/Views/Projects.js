import React from 'react';

import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  React.useEffect(() => {
    fetch('https://api.github.com/users/rabeeh-ta/repos')
      .then((response) => response.json())
      .then((data) => {
        var myGitRepos = data.filter((repo) => {
          if (
            !repo.fork &&
            repo.description != null &&
            repo.stargazers_count > 0
          ) {
            return repo;
          }
          return null;
        });

        // sort the list by the no of stars the repo has. ie, top rated repo should be first. (BUBBLE SORT)
        for (var i = 0; i < myGitRepos.length; i++) {
          for (var j = 0; j < myGitRepos.length - i - 1; j++) {
            if (myGitRepos[j].watchers < myGitRepos[j + 1].watchers) {
              var temp = myGitRepos[j];
              myGitRepos[j] = myGitRepos[j + 1];
              myGitRepos[j + 1] = temp;
            }
          }
        }

        setProjects(myGitRepos);
      });
  }, []);

  const [Projects, setProjects] = React.useState([]);

  const ProjectsComponents = Projects.map((repo) => {
    return (
      <ProjectCard
        name={repo.name}
        lang={repo.language}
        description={repo.description}
        projectLink={repo.html_url}
        key={repo.id}
      />
    );
  });

  return (
    <div className="container">
      <div className="row me-row schedule" id="schedule">
        <h2 className="row-title content-ct">Projects from Github</h2>
        <div className="wrapper">
          <div className="tab-content ">
            <div role="tabpanel" className="tab-pane fade in active" id="day-1">
              <div className="row" id="projects-main">
                {ProjectsComponents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
