import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {fullWhite, lightGreen500} from 'material-ui/styles/colors';


import '../styles/styles.scss';


export default class LoginPage extends Component {


	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		const user = this.refs.email.getValue().trim();
		const pass = this.refs.password.getValue().trim();
		const creds = { email: user, password: pass };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		return (
			<MuiThemeProvider muiTheme={muiTheme}>	
			<div className='parent'>
				<h1>OLIVE FINANCE</h1>
				<div className='nav'>
					<FlatButton hoverColor={lightGreen500} label='Who are we?' onClick={() => console.log('we are')}/>
					<FlatButton hoverColor={lightGreen500} label='Our Data' onClick={() => console.log('allo')}/>	
					<FlatButton hoverColor={lightGreen500} label='Learn More' onClick={() => console.log('noone')}/>
					<FlatButton hoverColor={lightGreen500} label='Contact Us' onClick={() => console.log('noone')}/>
				</div>
				<div className='login'>
					<h3>Login</h3>
					<TextField type='text' ref='email' hintText='Email' color={fullWhite}/>
					<br/><br/>
					<TextField type='password' ref='password' hintText='Password'/>
					<br/><br/>
					<RaisedButton backgroundColor={lightGreen500} label='Login' onClick={() => this.handleClick()}/>
					{errorMessage &&
						<p>{errorMessage}</p>
					}
				</div>
			</div>
			</MuiThemeProvider>
		);
	}
	
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: fullWhite,
  },
});

LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
