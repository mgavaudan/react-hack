import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPatients } from './patientActions';
import Patients from '../../components/Patients';

export class PatientContainer extends Component {

	static propTypes = {
		patients: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		getPatients: PropTypes.func.isRequired
	};

	constructor(props){
		super(props);
	}

	render(){
		const { patients, getPatients } = this.props;
		if(patients.isFetching === false && patients.list.length !== 0 ){
			return <Patients patients={patients} getPatients={getPatients}/>;
		}
		else{
			return <div> Loading </div>;
		}
	}

}

const mapStateToProps = (state) => {
	const { patients } = state;
	return{
		patients
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		getPatients: bindActionCreators(fetchPatients, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientContainer);