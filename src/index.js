import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Views/Landing';
import FeaturedProjects from './Views/FeaturedProjects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <FeaturedProjects />
  </React.StrictMode>
);
