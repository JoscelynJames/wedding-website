import React, { Component } from 'react';
import Form from '../Form/Form';
import Date from './Date';
import Location from './Location';
import Dress from './Dress';

class Rsvp extends Component {
	render() {
		return (
			<div>
				<Date />
				<Location />
				<Dress />
				<Form />
			</div>
		);
	}
};

export default Rsvp;