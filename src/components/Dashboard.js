import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component {

	render() {
		const { onQuoteClick, onSecretQuoteClick, quote, isSecretQuote, onLogoutClick } = this.props;

		return (
			<div>
				<button onClick={() => onLogoutClick()} >
					Logout
				</button>

				<div >
					<button onClick={onQuoteClick} >
					Get Quote
					</button>
				</div>

				<div >
					<button onClick={onSecretQuoteClick}>
					Get Secret Quote
					</button>
				</div>

				<div >
					{quote && !isSecretQuote &&
						<div>
							<blockquote>{quote}</blockquote>
						</div>
					}

					{quote && isSecretQuote &&
						<div>
							<span>Secret Quote</span>
							<hr/>
							<blockquote>
							{quote}
							</blockquote>
						</div>
					}
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	onQuoteClick: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
	quote: PropTypes.string,
	isSecretQuote: PropTypes.bool.isRequired
};
