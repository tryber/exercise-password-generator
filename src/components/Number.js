import React, { Component } from 'react';

class Number extends Component {
	render() {
		return (
			<div className='container'>
				<label htmlFor="number">
				Include Number
					<input id="number" type="number" />
				</label>
			</div>
		)
	}
}

export default Number;