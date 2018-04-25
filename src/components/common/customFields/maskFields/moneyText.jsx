import React from 'react';
import CurrencyInput from './currencyComponent/react-currency-input';

const MoneyText = props => (
	<CurrencyInput
		style={styles.inputStyle}
		precision={2}
		decimalSeparator=","
		thousandSeparator="."
		{...props.input}
	/>
);

const styles = {
	inputStyle: {
		border: 'none'
	}
};

export default MoneyText;
