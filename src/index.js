import React from 'react';
import ReactDOM from 'react-dom/client';

import Landing from './views/Landing';
import FeaturedProjects from './views/FeaturedProjects';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <FeaturedProjects />
    <AboutMe />
    <Projects />
  </React.StrictMode>
);
