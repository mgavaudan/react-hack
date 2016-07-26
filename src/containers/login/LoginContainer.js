import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from './loginActions';
import LoginPage from '../../components/LoginPage';
import Dashboard from '../../components/Dashboard';


export class LoginContainer extends Component {

	constructor(props){
		super(props);
	}

	render(){
		const { user, getData } = this.props;
		if ( user && user.isAuthenticated ){
			return (
				<Dashboard/>
			);
		}
		else {
			return (
				<LoginPage getData={getData}/>
			);
		}
	}

}

LoginContainer.propTypes = {
	user: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	getData: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
	const user = state.data;
	return{
		user
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		getData: bindActionCreators(fetchData, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);