import React from 'react';
import CustomInput from './customInput';
import MobileText from './maskFields/mobileText';

const customMobileInput = props => {
	const { input } = props;

	return (
		<div>
			<CustomInput {...props}>
				<MobileText {...input} />
			</CustomInput>
		</div>
	);
};

export default customMobileInput;
