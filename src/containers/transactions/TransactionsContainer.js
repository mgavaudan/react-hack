import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callApi } from './transactionsActions';
import Dashboard from '../../components/Dashboard';

class TransactionsContainer extends Component {

	componentWillMount(){
		const { dispatch } = this.props;
		dispatch(callApi('random-quote'));
	}


	render(){
		return <Dashboard {...this.props}/>;
	}
}

TransactionsContainer.propTypes = {
	transactions: PropTypes.object.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	const { transactions }  = state;
	return{
		transactions
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onSecretQuoteClick: bindActionCreators(callApi, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);