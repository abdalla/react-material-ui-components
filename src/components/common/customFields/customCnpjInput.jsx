import React from 'react';
import CnpjText from './maskFields/cnpjText';
import CustomInput from './customInput';

const customCnpjInput = props => {
	const { input } = props;

	return (
		<div>
			<CustomInput {...props}>
				<CnpjText {...input} />
			</CustomInput>
		</div>
	);
};

export default customCnpjInput;
