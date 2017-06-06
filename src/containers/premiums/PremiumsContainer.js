import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callApi0, callApi1, callApi2, callApi3, callApi4, 
		 callApi5, callApi6, callApi7, callApi8, callApi9 } from './premiumsActions';
import Dashboard from '../../components/Dashboard';

class PremiumsContainer extends Component {

	componentWillMount(){
		const { dispatch } = this.props;
		dispatch(callApi0());
	}


	render(){
		return <Dashboard {...this.props}/>;
	}
}

PremiumsContainer.propTypes = {
	premiums: PropTypes.object.isRequired,
	api0: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	const { premiums }  = state;
	return{
		premiums
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		api0: bindActionCreators(callApi0, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PremiumsContainer);