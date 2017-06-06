import {
	PREMIUM0, PREMIUM1, PREMIUM2, PREMIUM3, PREMIUM4,
	PREMIUM5, PREMIUM6, PREMIUM7, PREMIUM8, PREMIUM9,
	PREMIUM_ERROR, PREMIUM_REQUEST
} from './premiumsActions';

const premiums = (state = { data0: '', data1: '', data2: '', data3: '', data4: '', 
							data5: '', data6: '', data7: '', data8: '', data9: '',
							fetching: false, error: ''}, 
							action) => {
	switch (action.type) {
	case PREMIUM0:
		return Object.assign({}, state, {
			data0: action.data,
			fetching: false
		});
	case PREMIUM1:
		return Object.assign({}, state, {
			data1: action.data,
			fetching: false
		});
	case PREMIUM2:
		return Object.assign({}, state, {
			data2: action.data,
			fetching: false
		});
	case PREMIUM3:
		return Object.assign({}, state, {
			data3: action.data,
			fetching: false
		});
	case PREMIUM4:
		return Object.assign({}, state, {
			data4: action.data,
			fetching: false
		});
	case PREMIUM5:
		return Object.assign({}, state, {
			data5: action.data,
			fetching: false
		});
	case PREMIUM6:
		return Object.assign({}, state, {
			data6: action.data,
			fetching: false
		});
	case PREMIUM7:
		return Object.assign({}, state, {
			data7: action.data,
			fetching: false
		});
	case PREMIUM8:
		return Object.assign({}, state, {
			data8: action.data,
			fetching: false
		});
	case PREMIUM9:
		return Object.assign({}, state, {
			data9: action.data,
			fetching: false
		});
	case PREMIUM_ERROR:
		return Object.assign({}, state, {
			error: action.error
		});
	case PREMIUM_REQUEST:
		return Object.assign({}, state, {
			fetching: true
		});
	default:
		return state;
	}
};

export default premiums;