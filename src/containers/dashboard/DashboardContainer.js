import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote, fetchSecretQuote } from './dashboardActions';
import Dashboard from '../../components/Dashboard';

class DashboardContainer extends Component {

	componentWillMount(){
		const { dispatch } = this.props;
		dispatch(fetchQuote());
	}


	render(){
		return <Dashboard {...this.props}/>;
	}
}

DashboardContainer.propTypes = {
	quotes: PropTypes.object.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
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
		onSecretQuoteClick: bindActionCreators(fetchSecretQuote, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);