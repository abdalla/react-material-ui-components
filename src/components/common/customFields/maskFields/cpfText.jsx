import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

class CpfText extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<MaskedInput
				mask={[
					/\d/,
					/\d/,
					/\d/,
					'.',
					/\d/,
					/\d/,
					/\d/,
					'.',
					/\d/,
					/\d/,
					/\d/,
					'-',
					/\d/,
					/\d/
				]}
				{...this.props}
			/>
		);
	}
}

export default CpfText;
