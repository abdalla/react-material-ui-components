import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from 'material-ui/Dialog';
import { CustomButton } from '../../components/common';
import { SectionHeader } from './sectionHeader';

const Alert = ({
	style,
	title,
	message,
	open,
	handleNo,
	handleYes,
	...custom
}) => (
	<Dialog
		open={open}
		onClose={(handleNo, handleYes)}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
		{...custom}>
		<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-description">
				{message}
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<CustomButton onClick={handleNo} color="secondary">
				NÃO
			</CustomButton>
			<CustomButton onClick={handleYes} color="primary" autoFocus>
				SIM
			</CustomButton>
		</DialogActions>
	</Dialog>
);

SectionHeader.propTypes = {
	open: PropTypes.bool.isRequired,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	handleYes: PropTypes.func.isRequired,
	handleNo: PropTypes.func.isRequired
};

export { Alert };
