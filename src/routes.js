import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, Patients } from './containers/index.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="patients" component={Patients}/>
    <Route path="*" component={Home}/>
  </Route>
);