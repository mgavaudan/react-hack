import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage.js';

import FuelSavingsPage from './containers/fuelSavings/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import LoginContainer from './containers/login/LoginContainer'; // eslint-disable-line import/no-named-as-default
import DashboardContainer from './containers/dashboard/DashboardContainer'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="welcome" component={DashboardContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
