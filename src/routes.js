import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsIndex from './components/projects/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsIndex} />
  </Route>
);
