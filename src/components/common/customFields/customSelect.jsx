import React from 'react';
import Select from './base/Select';

import { grey, red, teal } from 'material-ui/colors';

const customSelect = ({
	input,
	label,
	meta: { touched = true, error },
	styles,
	children,
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
			<Select
				label={label}
				{...input}
				error={showError}
				errorMessage={error}
				// eslint-disable-next-line
				// onChange={(event, index, value) => onChange(value)}
				children={children}
				{...custom}
			/>
		</div>
	);
};

export default customSelect;
