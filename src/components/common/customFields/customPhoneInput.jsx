import React from 'react';
import CustomInput from './customInput';
import PhoneText from './maskFields/phoneText';

const customPhoneInput = props => {
	const { input } = props;

	return (
		<div>
			<CustomInput {...props}>
				<PhoneText {...input} />
			</CustomInput>
		</div>
	);
};

export default customPhoneInput;
