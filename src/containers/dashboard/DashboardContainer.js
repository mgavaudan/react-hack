import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

export class DashboardContainer extends Component {
	render(){
		const { patients } = this.props;
		return <Dashboard patients={patients}/>;
	}
}

DashboardContainer.propTypes = {
	patients: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	const patients  = state.data;
	return{
		patients
	};
};

export default connect(mapStateToProps)(DashboardContainer);