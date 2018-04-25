import React from 'react';
import { CardContent } from 'material-ui/Card';

const SectionContent = ({ style, children, ...custom }) => (
	<CardContent style={{ ...styles.cardSectionStyle, ...style }} {...custom}>
		{children}
	</CardContent>
);

const styles = {
	cardSectionStyle: {
		display: 'flex',
		flexDirection: 'column',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { SectionContent };
