import React from 'react';
import CpfText from './maskFields/cpfText';
import CustomInput from './customInput';

const customCpfInput = props => {
	const { input } = props;

	return (
		<div>
			<CustomInput {...props}>
				<CpfText {...input} />
			</CustomInput>
		</div>
	);
};

export default customCpfInput;
