import React, { Component } from 'react';

class MoneyText extends Component {
	render() {
		const { value } = this.props;

		const formattedVal = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(value);

		return <div>{formattedVal}</div>;
	}
}

export { MoneyText };
