import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		const { textLabel } = this.props;
		return (
			<div className='container'>
				<label htmlFor={textLabel}>
				{textLabel}
					<input id={textLabel} type="checkbox" />
				</label>
			</div>
		)
	}
}

export default Checkbox;