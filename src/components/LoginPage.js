import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


export default class LoginPage extends Component {

	constructor(props){
		super(props);
		this.state = { username: '', password: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		const username = this.refs.username;
		const password = this.refs.password;
		const creds = { username: username.value.trim(), password: password.value.trim() };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		return (
			<MuiThemeProvider>	
			<div>
				<h1>Login</h1>
				<h2>Get Started</h2>
				<ol>
					<li><Link to='notfound'><FlatButton label='Not Found Page'/></Link></li>
					<li>Holla Holla Dolla Dolla</li>
				</ol>

				<input type='text' ref='username' placeholder='Username'/>
				<input type='password' ref='password' placeholder='Password'/>
				<FlatButton label='Login' backgroundColor='green' onClick={() => this.handleClick()}/>


        {errorMessage &&
          <p>{errorMessage}</p>
        }
			</div>
			</MuiThemeProvider>
		);
	}
	
}

LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
