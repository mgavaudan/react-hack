import fetch from 'isomorphic-fetch';

export const PREMIUM0 = 'PREMIUM0';
export const PREMIUM1 = 'PREMIUM1';
export const PREMIUM2 = 'PREMIUM2';
export const PREMIUM3 = 'PREMIUM3';
export const PREMIUM4 = 'PREMIUM4';
export const PREMIUM5 = 'PREMIUM5';
export const PREMIUM6 = 'PREMIUM6';
export const PREMIUM7 = 'PREMIUM7';
export const PREMIUM8 = 'PREMIUM8';
export const PREMIUM9 = 'PREMIUM9';

export const PREMIUM_ERROR = 'PREMIUM_ERROR';
export const PREMIUM_REQUEST = 'PREMIUM_REQUEST';



function requestPremium() {
	return {
		type: PREMIUM_REQUEST
	};
}

function premiumError(error) {
	return {
		type: PREMIUM_ERROR,
		error
	};
}

function receivePremium0(data) {
	return {
		type: PREMIUM0,
		data
	};
}

function receivePremium1(data) {
	return {
		type: PREMIUM1,
		data
	};
}

function receivePremium2(data) {
	return {
		type: PREMIUM2,
		data
	};
}

function receivePremium3(data) {
	return {
		type: PREMIUM3,
		data
	};
}

function receivePremium4(data) {
	return {
		type: PREMIUM4,
		data
	};
}

function receivePremium5(data) {
	return {
		type: PREMIUM5,
		data
	};
}

function receivePremium6(data) {
	return {
		type: PREMIUM6,
		data
	};
}

function receivePremium7(data) {
	return {
		type: PREMIUM7,
		data
	};
}

function receivePremium8(data) {
	return {
		type: PREMIUM8,
		data
	};
}

function receivePremium9(data) {
	return {
		type: PREMIUM9,
		data
	};
}




export function callApi0() {

	return dispatch => {
		dispatch(requestPremium());

		return fetch('https://cors.now.sh/https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium0(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi1() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.coinbase.com/v2/exchange-rates?currency=BTC')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium1(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi2() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.korbit.co.kr/v1/ticker?currency_pair=eth_krw')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium2(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi3() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.coinbase.com/v2/exchange-rates?currency=ETH')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium3(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi4() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.korbit.co.kr/v1/ticker?currency_pair=etc_krw')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium4(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi5() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.coinbase.com/v2/exchange-rates?currency=ETC')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium5(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi6() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.korbit.co.kr/v1/ticker?currency_pair=ltc_krw')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium6(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi7() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/https://api.coinbase.com/v2/exchange-rates?currency=LTC')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium7(text));
			})
			.catch(err => console.log(err));
	};
}


export function callApi8() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium8(text));
			})
			.catch(err => console.log(err));
	};
}

export function callApi9() {

	return dispatch => {
		dispatch(requestPremium());
		return fetch('https://cors.now.sh/')
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(premiumError(text));
					return Promise.reject(text);
				}
				console.log(text);
				dispatch(receivePremium9(text));
			})
			.catch(err => console.log(err));
	};
}

