import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

class MobileText extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<MaskedInput
				mask={[
					'(',
					/[1-9]/,
					/\d/,
					')',
					/9?/,
					/\d/,
					/\d/,
					/\d/,
					/\d/,
					'-',
					/\d/,
					/\d/,
					/\d/,
					/\d/
				]}
				{...this.props}
			/>
		);
	}
}

export default MobileText;
