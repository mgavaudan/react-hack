import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const LoginPage = () => {
	return (
		<MuiThemeProvider>	
		<div>
			<h1>Login</h1>
			<h2>Get Started</h2>
			<ol>
				<li><Link to="fuel-savings"><FlatButton label="Fuel Savings"/></Link></li>
				<li>Holla Holla Dolla Dolla</li>
			</ol>
		</div>
		</MuiThemeProvider>
	);
};

export default LoginPage;
