import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const NotFoundPage = () => {
  return (
  	<MuiThemeProvider>
	    <div>
	      <h1>
	        Welcome!
	      </h1>
	      <Link to="/"> Go back to homepage </Link>
	    </div>
		</MuiThemeProvider>
  );
};

export default NotFoundPage;
