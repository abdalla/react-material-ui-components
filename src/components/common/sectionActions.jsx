import React from 'react';
import { CardActions } from 'material-ui/Card';

const SectionActions = ({ style, children, ...custom }) => (
	<CardActions style={{ ...styles.cardActionsStyle, ...style }} {...custom}>
		{children}
	</CardActions>
);

const styles = {
	cardActionsStyle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export { SectionActions };
