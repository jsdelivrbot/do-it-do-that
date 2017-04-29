import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsIndex from './components/projects/index';
import ProjectsNew from './components/projects/new';
import ProjectsShow from './components/projects/show';

export default (
  <Route path="/">
    <IndexRoute component={ProjectsIndex} />
    <Route path="projects/new" component={ProjectsNew} />
    <Route path="projects/:id" component={ProjectsShow} />
  </Route>
);
