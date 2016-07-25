import { combineReducers } from 'redux';
import patient from '../containers/patients/patientReducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  patient,
  routing: routerReducer
});

export default rootReducer;