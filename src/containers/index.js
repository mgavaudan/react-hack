import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from '../containers/login/loginReducers';
import premiums from '../containers/premiums/premiumsReducers';
import transactions from '../containers/transactions/transactionsReducers';



const rootReducer = combineReducers({
	login,
	premiums,
	transactions,
	routing: routerReducer
});

export default rootReducer;