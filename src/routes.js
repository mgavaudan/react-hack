import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

import FuelSavingsPage from './containers/fuelSavings/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import DashboardContainer from './containers/dashboard/DashboardContainer'; // eslint-disable-line import/no-named-as-default




export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="welcome" component={DashboardContainer}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
