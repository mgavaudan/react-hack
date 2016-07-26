import { GET_DATA, RECEIVE_DATA, ERROR_DATA } from './loginActions';

const data = (state = { isFetching: false, isAuthenticated: false, items: {} }, action) => {
	switch (action.type) {
	case GET_DATA:
		return Object.assign({}, state, {
			isFetching: true
		});
	case RECEIVE_DATA:
		return Object.assign({}, state, {
			isFetching: false,
			items: action.data,
			isAuthenticated: true,
			lastUpdated: action.receivedAt
		});
	case ERROR_DATA:
		return Object.assign({}, state, {
			isFetching: false,
			items: action.data,
			lastUpdated: action.receivedAt
		});
	default:
		return state;
	}
};

export default data;