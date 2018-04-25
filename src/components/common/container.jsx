import React from 'react';
import { Paper } from 'material-ui';

const Container = props => (
	<Paper
		className={props.className}
		style={[styles.containerStyle, props.style]}
		elevation={1}>
		{props.children}
	</Paper>
);

const styles = {
	containerStyle: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		alignSelf: 'center',
		alignContent: 'center',
		justifyContent: 'center'
	}
};

export { Container };
