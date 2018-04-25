import React from 'react';
import Button from 'material-ui/Button';

const CustomButton = props => (
	<Button variant="raised" {...props}>
		{props.children}
	</Button>
);

export { CustomButton };
