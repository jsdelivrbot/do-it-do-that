import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsIndex from './components/projects_index';

export default (
  <Route path="/">
    <IndexRoute component={ProjectsIndex} />
  </Route>
);
