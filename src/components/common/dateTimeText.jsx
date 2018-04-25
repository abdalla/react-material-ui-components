import React, { Component } from 'react';
import moment from 'moment';

const options = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: false,
	timeZone: 'America/New_York'
};

class DateTimeText extends Component {
	render() {
		const { value } = this.props;

		if (!value) {
			return <div />;
		}

		var localLocale = moment(value);
		const formattedVal = new Intl.DateTimeFormat('pt-BR', options).format(
			localLocale
		);

		return <div>{formattedVal}</div>;
	}
}

export { DateTimeText };
