import React, { Component } from 'react';
import Form from '../Form/Form';
import Date from './Date';
import Location from './Location';
import Dress from './Dress';
import styles from './Rsvp.css';
import RaisedButton from 'material-ui/RaisedButton';

class Rsvp extends Component {

	goBack() {

		this.props.history.goBack();
		
	}
	render() {
		return (
			<div>
				<div className={styles.header}>
					<div className={styles.back} onClick={() => this.goBack()}>
						<RaisedButton label="Go back"/>
					</div>
				</div>
				<Date />
				<Location />
				<Dress />
				<Form />
			</div>
		);
	}
};

export default Rsvp;