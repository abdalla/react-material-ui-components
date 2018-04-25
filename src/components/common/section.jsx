import React from 'react';
import { Card } from 'material-ui';

const Section = ({ style, children, ...custom }) => (
	<Card style={{ ...styles.cardStyle, ...style }} {...custom}>
		{children}
	</Card>
);

const styles = {
	cardStyle: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '100%',
		margin: 4,
		alignItems: 'center',
		minHeight: 980
	}
};

export { Section };
