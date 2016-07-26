import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from '../containers/login/loginReducers';


const rootReducer = combineReducers({
  login,
  routing: routerReducer
});

export default rootReducer;