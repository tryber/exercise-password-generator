import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Number from './Number';

class Form extends Component {
	constructor() {
		super()
		this.state = {
			upperCase: false,
			lowererCase: false,
			numbers: false,
			symbols: false,
		}
	}
	render() {
		return (
			<form>
				<div>
					<button type="button">Click Generate</button>
				</div>
				<section className='number'>
				<p>length: 23</p>	
					<Number />
				</section>
				<section className='settings'>
					<p>settings</p>
					<Checkbox textLabel="Include Uppercase"/>
					<Checkbox textLabel="Include Lowercase"/>
					<Checkbox textLabel="Include Numbers"/>
					<Checkbox textLabel="Include Symbols"/>
				</section>
			</form>
		)
	}
}

export default Form;