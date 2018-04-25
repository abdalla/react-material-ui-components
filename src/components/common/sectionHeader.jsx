import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader } from 'material-ui/Card';

const SectionHeader = ({ style, children, ...custom }) => (
	<CardHeader style={{ ...styles.cardStyle, ...style }} {...custom}>
		{children}
	</CardHeader>
);

const styles = {
	cardStyle: {
		display: 'flex',
		alignItems: 'flex-start',
		width: '90%',
		marginLeft: 30
	}
};

SectionHeader.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export { SectionHeader };
