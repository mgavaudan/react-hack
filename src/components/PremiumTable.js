import React, { Component, PropTypes } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';


export default class PremiumTable extends Component {

	render() {
		const { premiums } = this.props;
		let obj0 = JSON.parse(premiums.data0).last/1119;

		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Exchange</TableHeaderColumn>
						<TableHeaderColumn>BTC ($)</TableHeaderColumn>
						<TableHeaderColumn>ETH ($)</TableHeaderColumn>
						<TableHeaderColumn>DASH ($)</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableRowColumn>Korbit</TableRowColumn>
						<TableRowColumn>{obj0}</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Bitthumb</TableRowColumn>
						<TableRowColumn>Randal White</TableRowColumn>
						<TableRowColumn>Unemployed</TableRowColumn>
						<TableRowColumn>Unemployed</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Gemini</TableRowColumn>
						<TableRowColumn>Stephanie Sanders</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Bittrex</TableRowColumn>
						<TableRowColumn>Steve Brown</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Coinbase</TableRowColumn>
						<TableRowColumn>Christopher Nolan</TableRowColumn>
						<TableRowColumn>Unemployed</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Best Margin</TableRowColumn>
						<TableRowColumn>Christopher Nolan</TableRowColumn>
						<TableRowColumn>Unemployed</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);

	}
}

PremiumTable.propTypes = {
	premiums: PropTypes.object
};
