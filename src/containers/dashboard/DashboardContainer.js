import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote, fetchSecretQuote } from './dashboardActions';
import Dashboard from '../../components/Dashboard';

class DashboardContainer extends Component {

	onComponentWillMount(){
		const { dispatch } = this.props;
		dispatch(fetchQuote);
	}


	render(){
		const { quotes, onLogoutClick } = this.props;
		return <Dashboard quotes={quotes} onLogoutClick={onLogoutClick}/>;
	}
}

DashboardContainer.propTypes = {
	quotes: PropTypes.object.isRequired,
	secretQuoteClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	const { quotes }  = state;
	return{
		quotes
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		secretQuoteClick: bindActionCreators(fetchSecretQuote, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);