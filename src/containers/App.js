import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class App extends Component {

	render(){
		return(
			<MuiThemeProvider>
				{this.props.children}
			</MuiThemeProvider>
		);
	}
}