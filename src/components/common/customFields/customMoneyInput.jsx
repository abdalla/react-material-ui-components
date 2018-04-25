import React from 'react';
import CustomInput from './customInput';
import Money from './maskFields/moneyText';

const customMoneyInput = props => (
	<div>
		<CustomInput {...props}>{Money(props)}</CustomInput>
	</div>
);

export default customMoneyInput;
