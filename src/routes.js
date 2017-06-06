import React from 'react';
import { Route, IndexRoute } from 'react-router';

import NotFoundPage from './components/NotFoundPage.js';

import App from './containers/App';
import LoginContainer from './containers/login/LoginContainer'; // eslint-disable-line import/no-named-as-default
import PremiumsContainer from './containers/premiums/PremiumsContainer'; // eslint-disable-line import/no-named-as-default
import TransactionsContainer from './containers/transactions/TransactionsContainer'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginContainer}/>
    <Route path='transactions' component={TransactionsContainer}/>
    <Route path='premiums' component={PremiumsContainer}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
);
