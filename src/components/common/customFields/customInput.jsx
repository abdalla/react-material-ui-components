import React from 'react';
import Input from './base/Input';
import { grey, red, teal } from 'material-ui/colors/index';

const customInput = ({
	input,
	label,
	meta: { touched = true, error },
	styles,
	...custom
}) => {
	const inputStyle = styles || {
		hintStyle: {
			color: teal[400]
		},
		errorStyle: {
			color: red[800]
		},
		underlineStyle: {
			borderColor: teal[700]
		},
		floatingLabelStyle: {
			color: grey[500]
		},
		inputStyle: {
			color: teal[400]
		},
		floatingLabelFocusStyle: {
			color: grey[500]
		},
		input: {
			width: '50%'
			// marginLeft: '10%'
		}
	};

	const showError = touched && (error ? true : false);

	return (
		<div style={inputStyle.input}>
			<Input
				fullWidth
				label={label}
				error={showError}
				errorMessage={error}
				{...input}
				{...custom}
			/>
		</div>
	);
};

export default customInput;
