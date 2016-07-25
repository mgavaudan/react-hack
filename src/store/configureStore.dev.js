import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { routerReducer } from 'react-router-redux';

import fuelSavings from './fuelSavingsReducer';

loggerMiddleware = createLogger()

export default function configureStore(initialState) {

	const rootReducer = combineReducers({
		fuelSavings,
		routing: routerReducer
	});
	
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
		window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
		)
	);

	return store;
}
