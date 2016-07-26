import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fuelSavings from '../containers/fuelSavings/fuelSavingsReducer';
import login from '../containers/login/loginReducers';


const rootReducer = combineReducers({
  fuelSavings,
  login,
  routing: routerReducer
});

export default rootReducer;