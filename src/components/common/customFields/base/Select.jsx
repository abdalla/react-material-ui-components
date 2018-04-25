import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { Select, FormControl, FormHelperText } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { red } from 'material-ui/colors';
import PropTypes from 'prop-types';

const styles = theme => ({
	formControl: {
		margin: theme.spacing.unit
	},
	errorStyle: {
		color: red[800]
	}
});

const Dropdown = ({
	classes,
	name,
	label,
	children,
	errorMessage,
	...custom
}) => (
	<Fragment>
		<FormControl fullWidth className={classes.formControl}>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<Select
				fullWidth
				children={children}
				{...custom}
				inputProps={{
					id: name
				}}
			/>
			{custom.error && (
				<FormHelperText className={classes.errorStyle}>
					{errorMessage}
				</FormHelperText>
			)}
		</FormControl>
	</Fragment>
);

Dropdown.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	children: PropTypes.array
};

export default withStyles(styles)(Dropdown);
