import React from 'react';
import { FormControl, FormHelperText, TextField } from 'material-ui';
import { withStyles } from 'material-ui/styles/index';
import { red } from 'material-ui/colors/index';

const styles = theme => ({
	formControl: {
		margin: theme.spacing.unit
	},
	errorStyle: {
		color: red[800]
	}
});

const Input = ({ classes, input, label, styles, errorMessage, ...custom }) => (
	<FormControl fullWidth className={classes.formControl}>
		<TextField fullWidth label={label} {...input} {...custom} />
		{custom.error && (
			<FormHelperText className={classes.errorStyle}>
				{errorMessage}
			</FormHelperText>
		)}
	</FormControl>
);

export default withStyles(styles)(Input);
