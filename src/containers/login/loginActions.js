import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';



//*****************************  LOGIN  *******************************//

function requestLogin(creds) {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	};
}

function receiveLogin(user) {
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		token: user.token
	};
}

function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	};
}

export function loginUser(creds) {

	let config = {
		method: 'POST',
		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
		body: `email=${creds.email}&password=${creds.password}`
	};

	return dispatch => {

		dispatch(requestLogin(creds));

		return fetch('http://localhost:8080/api/authenticate', config)
		.then(response =>
			response.json().then(user => ({ user, response }))
		).then(({ user, response }) =>  {
			// ERROR
			if (!response.ok) {
				dispatch(loginError(user.message));
				return Promise.reject(user);
			// SUCCESS
			} else {
				localStorage.setItem('token', user.token);
				dispatch(receiveLogin(user));
			}
		}).catch(err => console.log("Error: ", err));
	};
}


//***************************  LOGOUT  *******************************//



function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  };
}




