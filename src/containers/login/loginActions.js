import fetch from 'isomorphic-fetch';

export const GET_DATA = 'GET_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ERROR_DATA = 'ERROR_DATA';


export function fetchData(email, password){
	return (dispatch) => {
		dispatch(getData(email));
		fetch(`localhost:3000\doctors\${email}`)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			console.log('Login Success', password);
			dispatch(receiveData(email, json));
		}).catch(function(ex) {
			console.log('Login failed', ex);
			dispatch(errorData(email, ex));
		});
		return Promise.resolve();
	};
} 

function getData(email){
	return{
		type: GET_DATA,
		email
	};
}

function receiveData(email, json){
	return{
		type: RECEIVE_DATA,
		email,
		data: json,
		receivedAt: Date.now()
	};
}

function errorData(email, json){
	return{
		type: RECEIVE_DATA,
		email,
		data: json,
		receivedAt: Date.now()
	};
}